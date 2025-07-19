import { Injectable } from '@angular/core';
import { Client, Frame, Message, Versions } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private stompClient: any;
  private notificationsSubject = new BehaviorSubject<any>(null);
  public notifications$ = this.notificationsSubject.asObservable();

  constructor(private authService: AuthService) {}

  connect() {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Aucun token disponible pour la connexion WebSocket');
      return;
    }
    const socket = new SockJS(environment.wsEndpoint);
    this.stompClient = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {
        Authorization: 'Bearer ' + token
      },
      debug: str => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      stompVersions: new Versions(['v10.stomp']),
      forceBinaryWSFrames: true
    });

    this.stompClient.onConnect = (frame: Frame) => {
      console.log('WebSocket connecté :', frame);
      this.subscribeToUserQueue();
    };

    // Correction ici : ajout du type Frame
    this.stompClient.onStompError = (frame: Frame) => {
      console.error('Erreur STOMP :', frame);
    };

    this.stompClient.activate();
  }

  private subscribeToUserQueue() {
    this.stompClient.subscribe(
      `/user/queue/notifications`,
      (msg: Message) => {
        console.log('Notification reçue :', msg.body);
        this.notificationsSubject.next(JSON.parse(msg.body));
      }
    );
  }

  disconnect() {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }
}