// angular import
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { Router, RouterLink } from '@angular/router';
import { StockService } from 'src/app/admin-page/SERVICES/stocks.service';

@Component({
  selector: 'app-nav-right',
  imports: [
    SharedModule,
    RouterLink
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
  // public props
  visibleUserList: boolean;
  chatMessage: boolean;
  friendId!: number;
  userName: string = '';
  nomEntreprise = '';

  // constructor
  constructor(
    private userService: UsersService,
    private router: Router,
    private stockService: StockService
  ) {
    this.visibleUserList = false;
    this.chatMessage = false;
    
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getAllhistorique();
  }

  // public method 
  // eslint-disable-next-line
  onChatToggle(friendID: any) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
        this.userName = user.nomComplet; // Récupération du nom
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
}
