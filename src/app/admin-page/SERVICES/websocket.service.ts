import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Client, Frame, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private client: Client;
  

  constructor(private authService: AuthService) {
    this.client = new Client({
      webSocketFactory: () => new SockJS(environment.wsEndpoint),
      reconnectDelay: 5000,
    });
  }

  public connect(): Observable<Frame> {
    return new Observable<Frame>(observer => {
      const jwt = this.authService.getToken();
      if (!jwt) {
        observer.error(new Error('JWT manquant, impossible de se connecter au WS'));
        return;
      }

      // On n’envoie plus de XSRF-TOKEN ici
      this.client.connectHeaders = {
        // selon votre config backend, gardez Authorization ou X-Auth-Token
        Authorization: `Bearer ${jwt}`
      };

      this.client.onConnect = (frame: Frame) => {
        observer.next(frame);
        observer.complete();
      };
      this.client.onStompError = frame => {
        observer.error(new Error(`STOMP ERROR ${frame.headers['message']}`));
      };

      this.client.activate();
    });
  }

  public disconnect(): void {
    this.client.deactivate();
  }

  public subscribe(topic: string, cb: (msg: any) => void): void {
    this.client.subscribe(topic, (message: IMessage) => {
      cb(JSON.parse(message.body));
    });
  }

  public send(destination: string, payload: any): void {
    this.client.publish({
      destination,
      body: JSON.stringify(payload)
    });
  }
}