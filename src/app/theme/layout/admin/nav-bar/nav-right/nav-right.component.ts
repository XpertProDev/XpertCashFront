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
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-right',
  imports: [SharedModule, ],
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
  // public props
  visibleUserList: boolean;
  chatMessage: boolean;
  friendId!: number;
  userName: string = '';
  nomEntreprise = '';

  // constructor
  constructor(
    private userService: UsersService,
    private router: Router
  ) {
    this.visibleUserList = false;
    this.chatMessage = false;
    
  }

  ngOnInit(): void {
    this.getUserInfo();
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

  goToCompte() {
    this.router.navigate(['/compte']);
  }

  onLogout(): void {
    this.userService.logoutUser();
  }
}
