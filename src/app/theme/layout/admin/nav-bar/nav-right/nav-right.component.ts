// angular import
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

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
import { BehaviorSubject } from 'rxjs';
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
export class NavRightComponent implements OnInit{
  stockHistory: any[] = [];
  // --- notifications persistées + temps réel ---
  notificationsList: GlobalNotificationDto[] = [];
  // public props
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

  // constructor
  constructor(
    private userService: UsersService,
    private router: Router,
    private stockService: StockService,
    private lockService: LockService,
    private webSocketService: WebSocketService,
    private globalNotificationService: GlobalNotificationService,
  ) {
    this.visibleUserList = false;
    this.chatMessage = false;
    
  }

  // Fonction fléchée pour éviter les problèmes de "this"
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
    // 1️⃣ Récupération des infos utilisateur et photo
    this.getUserInfo();
    const savedPhoto = localStorage.getItem('photo');
    if (savedPhoto) {
      this.photo = savedPhoto;
      this.photoUrl = this.base64ToObjectUrl(savedPhoto);
    }

    // 2️⃣ Verrouillage écran
    this.lockService.isLocked$.subscribe(locked => {
      this.isLocked = locked;
    });

    // 1️⃣ Historique de stock
    this.stockService.getAllhistorique().subscribe(data => {
      this.stockHistory = data
        .map(item => ({ ...item, relativeTime: this.getRelativeTime(item.createdAt) }))
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });

    // 2️⃣ Notifications persistées
    this.globalNotificationService.getAllForCurrentUser()
      .subscribe(list => this.notificationsList = list);

    // 3️⃣ Connexion WS + réception en temps réel
    this.webSocketService.connect();
    this.webSocketService.notifications$
      .subscribe((newNotif: GlobalNotificationDto) => {
        if (newNotif) {
          this.notificationsList = [ newNotif, ...this.notificationsList ];
        }
      });

      // 4️⃣ Gestion du verrouillage et photo (inchangé)
    this.lockService.isLocked$.subscribe(locked => this.isLocked = locked);
    window.addEventListener('storage-photo-update', this.boundUpdatePhotoListener);
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
    window.removeEventListener('storage-photo-update', this.boundUpdatePhotoListener);
  }

  // eslint-disable-next-line
  onChatToggle(friendID: any) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  getAllhistorique() {
    this.stockService.getAllhistorique().subscribe(
      (data) => {
        this.stockHistory = data
          .map(item => ({
            ...item,
            relativeTime: this.getRelativeTime(item.createdAt)
          }))
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
        console.log('Historique trié :', this.stockHistory);
      },
      (error) => {
        console.error("Erreur lors de la récupération de l'historique", error);
      }
    );
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
}
