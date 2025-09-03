// angular import
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { filter, take } from 'rxjs/operators'; // Import manquant ajouté

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { Router, RouterLink } from '@angular/router';
import { StockService } from 'src/app/admin-page/SERVICES/stocks.service';
import { LockService } from 'src/app/admin-page/SERVICES/lock.service';
import { WebSocketService } from 'src/app/admin-page/SERVICES/websocket.service';
import { GlobalNotificationDto } from 'src/app/admin-page/MODELS/global_notification.dto';
import { BehaviorSubject, catchError, of, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { GlobalNotificationService } from 'src/app/admin-page/SERVICES/global_notification_service';
import { NotificationManagerService } from 'src/app/admin-page/SERVICES/NotificationManagerService';

@Component({
  selector: 'app-nav-right',
  imports: [
    SharedModule,
    RouterLink,
  ],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [style({ transform: 'translateX(100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(100%)' }))])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))])
    ])
  ]
})
export class NavRightComponent implements OnInit, OnDestroy {
  stockHistory: any[] = [];
  notificationsList: GlobalNotificationDto[] = [];
  visibleUserList: boolean;
  chatMessage: boolean;
  friendId!: number;
  userName: string = '';
  nomEntreprise = '';
  photo: string | null = null;
  photoUrl: string | null = null;
  isLocked = false;
  isWebSocketConnected = false; // Nouvelle propriété pour le statut WebSocket
  
  private boundUpdatePhotoListener = this.updatePhotoListener.bind(this);
  private notificationsSubject = new BehaviorSubject<GlobalNotificationDto | null>(null);
  public notifications$ = this.notificationsSubject.asObservable();
  private destroy$ = new Subject<void>();
  private notificationSubscription: Subscription | null = null;

  get unreadCount(): number {
    return this.notificationsList.filter(notif => !notif.read).length;
  }

  // get unreadNotifications() {
  //   return this.notificationsList.filter(n => !n.read);
  // }

  constructor(
    private userService: UsersService,
    private router: Router,
    private stockService: StockService,
    private lockService: LockService,
    private webSocketService: WebSocketService,
    private globalNotificationService: GlobalNotificationService,
    private cdr: ChangeDetectorRef,
    private notificationManager: NotificationManagerService,
  ) {
    this.visibleUserList = false;
    this.chatMessage = false;
    
    // Vérifier que le service est bien injecté
    console.log('🔧 NavRightComponent - NotificationManagerService injecté:', !!this.notificationManager);
  }

  private updatePhotoListener(event: Event): void {
    const newPhoto = localStorage.getItem('photo');
    if (newPhoto) {
      this.photo = newPhoto;
      this.photoUrl = this.base64ToObjectUrl(newPhoto);
    } else {
      this.photo = null;
      this.photoUrl = null;
    }
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.updatePhotoFromLocalStorage();
    this.setupLockScreenListener();
    this.loadStockHistory();
    // this.setupNotificationSystem();
    // this.setupWebSocket();
    this.initializeWebSocket();
    
    // S'abonner aux changements de notifications du NotificationManagerService
    this.notificationManager.getNotifications().pipe(
      takeUntil(this.destroy$)
    ).subscribe(notifications => {
      // console.log('📡 Notifications mises à jour depuis NotificationManager:', notifications);
      this.notificationsList = notifications;
      this.cdr.detectChanges(); // Forcer la mise à jour de l'interface
    });
    
    // S'abonner aux nouvelles notifications pour le badge clignotant
    this.notificationManager.getNewNotifications().pipe(
      takeUntil(this.destroy$)
    ).subscribe(newNotif => {
      // console.log('🥳 Nouvelle notification reçue pour badge clignotant:', newNotif);
      // Le badge sera mis à jour automatiquement via l'abonnement aux notifications
      this.flashNotificationBadge();
    });
    
    // this.calculateUnreadCount();
    this.checkUserAccess();
  }

  // Méthode pour marquer une notification comme lue
  markNotificationAsRead(notification: GlobalNotificationDto, event?: Event) {
    if (event) {
      event.stopPropagation(); // Empêcher la propagation du clic
    }

    if (notification.read) return; // Déjà lue

    this.globalNotificationService.markAsRead(notification.id).subscribe({
      next: () => {
        notification.read = true;
      },
      error: (err) => console.error('Erreur', err)
    });
  }

  // Calculer le nombre de notifications non lues
  // private calculateUnreadCount() {
  //   this.unreadCount = this.notificationsList.filter(n => !n.read).length;
  // }

  private initializeWebSocket(): void {
    // 1) listener photo
    window.addEventListener('storage-photo-update', this.boundUpdatePhotoListener);

    // 2) connexion STOMP + abonnement notifications
    this.webSocketService.connect().pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (frame) => {
        // console.log('STOMP connecté :', frame);
        // La gestion des notifications est maintenant déléguée au NotificationManagerService
      },
      error: (err) => {
        console.error('Erreur de connexion WebSocket :', err);
        // La reconnexion sera gérée automatiquement par le service
      }
    });

    // 3) Surveiller le statut de la connexion
    this.webSocketService.getConnectionStatus().pipe(
      takeUntil(this.destroy$)
    ).subscribe(isConnected => {
      // console.log('📡 Statut WebSocket:', isConnected ? '🟢 Connecté' : '🔴 Déconnecté');
      this.isWebSocketConnected = isConnected; // Mettre à jour la propriété
      // Les notifications seront rechargées automatiquement par le NotificationManagerService
    });

    // 4) S'abonner aux nouvelles notifications via le NotificationManagerService
    this.notificationManager.getNewNotifications().pipe(
      takeUntil(this.destroy$)
    ).subscribe((newNotif: GlobalNotificationDto) => {
      // console.log('🥳 Nouvelle notification reçue via NotificationManager:', newNotif);
      // Le badge sera mis à jour automatiquement via l'abonnement aux notifications
      this.flashNotificationBadge();
    });
  }

  // private subscribeNotifications() {
  //   this.webSocketService.subscribe(
  //     '/user/queue/notifications',
  //     (notif: GlobalNotificationDto) => {
  //       console.log('🥳 Notification reçue !', notif);
  //       this.notificationsList.unshift(notif);
  //     }
  //   );
  // }


  // private setupWebSocket() {
  //   this.webSocketService.connect().pipe(
  //     takeUntil(this.destroy$)
  //   ).subscribe({
  //     next: (notification: GlobalNotificationDto) => {
  //       this.notificationsList = [notification, ...this.notificationsList];
  //       this.flashNotificationBadge();
  //     },
  //     error: (err) => console.error('WebSocket error:', err)
  //   });
  // }



  private updatePhotoFromLocalStorage(): void {
    const savedPhoto = localStorage.getItem('photo');
    if (savedPhoto) {
      this.photo = savedPhoto;
      this.photoUrl = this.base64ToObjectUrl(savedPhoto);
    }
  }

  private setupLockScreenListener(): void {
    this.lockService.isLocked$.pipe(takeUntil(this.destroy$))
      .subscribe(locked => this.isLocked = locked);
  }

  private loadStockHistory(): void {
    this.stockService.getAllhistorique().pipe(
      takeUntil(this.destroy$),
      catchError(err => {
        console.error('Erreur historique stock:', err);
        return of([]);
      })
    ).subscribe(data => {
      this.stockHistory = data
        .map(item => ({ 
          ...item, 
          relativeTime: this.getRelativeTime(item.createdAt) 
        }))
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });
  }

  // private setupNotificationSystem(): void {
  //   this.globalNotificationService.getAllForCurrentUser().pipe(
  //     takeUntil(this.destroy$)
  //   ).subscribe(list => this.notificationsList = list);
  // }

  // Méthode de test pour vérifier les notifications
  testNotification() {
    // console.log('🧪 Test des notifications...');
    // console.log('📊 Notifications actuelles:', this.notificationsList);
    // console.log('📊 Compteur non lues:', this.unreadCount);
    // console.log('📊 Statut WebSocket:', this.isWebSocketConnected);
    
    // Forcer la détection des changements
    this.cdr.detectChanges();
  }

  // Méthode pour simuler une nouvelle notification (test)
  simulateNewNotification() {
    const testNotification: GlobalNotificationDto = {
      id: Date.now(), // ID unique basé sur le timestamp
      message: `Notification de test - ${new Date().toLocaleTimeString()}`,
      senderName: 'Système de test',
      createdAt: new Date().toISOString(),
      read: false
    };
    
    // console.log('🧪 Simulation d\'une nouvelle notification:', testNotification);
    
    // Ajouter directement à la liste locale pour le test
    this.notificationsList = [testNotification, ...this.notificationsList];
    this.cdr.detectChanges();
    
    // Afficher le badge clignotant
    this.flashNotificationBadge();
  }

  // Méthode pour tester la connexion WebSocket
  testWebSocketConnection() {
    // console.log('🔌 Test de connexion WebSocket...');
    // console.log('📊 Statut actuel:', this.isWebSocketConnected);
    
    // Tester la connexion
    this.webSocketService.connect().subscribe({
      next: (frame) => {
        // console.log('✅ Test de connexion réussi:', frame);
      },
      error: (err) => {
        console.error('❌ Test de connexion échoué:', err);
      }
    });
  }

  private flashNotificationBadge() {
    const badge = document.querySelector('.notification-badge');
    if (badge) {
      badge.classList.add('flash');
      setTimeout(() => badge.classList.remove('flash'), 2000);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.webSocketService.disconnect();
    window.removeEventListener('storage-photo-update', this.boundUpdatePhotoListener);
  }

  onChatToggle(friendID: any) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  getRelativeTime(date: string): string {
    const currentTime = new Date();
    const eventTime = new Date(date);
    const timeDiff = currentTime.getTime() - eventTime.getTime();
  
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (seconds < 60) {
      return `Il y a ${seconds} seconde${seconds > 1 ? 's' : ''}`;
    } 
    if (minutes < 60) {
      return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } 
    if (hours < 24) {
      return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    }
    if (days === 1) {
      return 'Hier';
    }
    return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
  }

  goToCompte() {
    this.router.navigate(['/utilisateur']);
  }

  onLogout(): void {
    this.userService.logoutUser();
  }
 
  private base64ToObjectUrl(base64: string): string {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([ab], { type: mimeString });
    return URL.createObjectURL(blob);
  }

  lockManually() {
    this.lockService.lockNow();
  }
canAccessUserManagement = false;

  private checkUserAccess(): void {
  this.userService.getUserInfo().pipe(take(1)).subscribe({
    next: (user) => {
      const { roleType, permissions = [] } = user;

      this.canAccessUserManagement =
        roleType === 'ADMIN' ||
        roleType === 'MANAGER' ||
        permissions.includes('GERER_UTILISATEURS');
    },
    error: (err) => {
      console.error('Erreur lors de la récupération des infos utilisateur :', err);
      this.canAccessUserManagement = false;
    }
  });
}
}