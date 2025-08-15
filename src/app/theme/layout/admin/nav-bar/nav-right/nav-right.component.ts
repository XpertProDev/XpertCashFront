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
  ) {
    this.visibleUserList = false;
    this.chatMessage = false;
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
    this.loadInitialNotifications();
    this.initializeWebSocket();
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
        console.log('STOMP connecté :', frame);
        // this.subscribeNotifications();
        // on s'abonne à notre topic de notifications
        this.webSocketService.subscribe(
          '/user/queue/notifications',
          (notif: GlobalNotificationDto) => {
            notif.read = false; // Nouvelles notifications non lues
            this.notificationsList = [notif, ...this.notificationsList];
            // this.calculateUnreadCount();
            this.flashNotificationBadge();
          }
        );
      },
      error: (err) => console.error('Erreur de connexion WebSocket :', err)
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

private loadInitialNotifications() {
    this.globalNotificationService.getAllForCurrentUser().pipe(
        takeUntil(this.destroy$)
    ).subscribe(notifications => {
        this.notificationsList = notifications;
        this.cdr.detectChanges();
    });
}

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