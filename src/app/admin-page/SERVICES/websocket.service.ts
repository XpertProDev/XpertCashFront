import { Injectable } from '@angular/core';
import { Client, Frame, Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private apiUrl = environment.apiBaseUrl;
  private stompClient: any;
  private notificationsSubject = new BehaviorSubject<any>(null);
  public notifications$ = this.notificationsSubject.asObservable();

  constructor(
    private authService: AuthService,
    private usersService: UsersService
) {}

  connect() {
    const socket = new SockJS(environment.wsEndpoint);
    this.stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    this.stompClient.onConnect = (frame: Frame) => {
        this.subscribeToUserQueue();
    };

    this.stompClient.activate();
  }

  private subscribeToUserQueue() {
    const userId = this.usersService.getUserInfo();
    if (userId) {
        this.stompClient.subscribe(
        `/user/queue/notifications`,
        (message: Message) => {
            this.notificationsSubject.next(JSON.parse(message.body));
        }
        );
    }
    }

  disconnect() {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }
}