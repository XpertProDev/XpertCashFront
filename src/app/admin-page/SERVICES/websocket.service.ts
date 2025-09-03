// src/app/admin-page/SERVICES/websocket.service.ts
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Client, Frame, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, BehaviorSubject, timer, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WebSocketConfig, DEFAULT_WEBSOCKET_CONFIG, WEBSOCKET_EVENTS } from './websocket.config';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private client!: Client;
  private isConnected = false;
  private reconnectAttempts = 0;
  private reconnectTimer: any;
  private connectionTimer: any;
  private subscriptions = new Map<string, (msg: any) => void>();
  private connectionStatus$ = new BehaviorSubject<boolean>(false);
  private connectionEvents$ = new BehaviorSubject<string>('');
  
  private config: WebSocketConfig = {
    ...DEFAULT_WEBSOCKET_CONFIG,
    endpoint: environment.wsEndpoint
  };
  
  constructor(private authService: AuthService) {
    this.initializeClient();
    
    // Reconnexion automatique quand la page devient visible
    this.setupVisibilityListener();
  }

  private setupVisibilityListener(): void {
    // Écouter les changements de visibilité de la page
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && !this.isConnected) {
        console.log('👁️ Page redevenue visible, tentative de reconnexion...');
        this.forceReconnect();
      }
    });

    // Reconnexion automatique quand la page reprend le focus
    window.addEventListener('focus', () => {
      if (!this.isConnected) {
        // console.log('🎯 Page reprend le focus, tentative de reconnexion...');
        this.forceReconnect();
      }
    });

    // Reconnexion automatique périodique toutes les 30 secondes si déconnecté
    setInterval(() => {
      if (!this.isConnected && this.reconnectAttempts < this.config.maxReconnectAttempts) {
        console.log('⏰ Reconnexion automatique périodique...');
        
        // S'abonner à l'Observable de connexion
        this.connect().subscribe({
          next: (frame) => {
            // console.log('✅ Reconnexion périodique réussie:', frame);
          },
          error: (err) => {
            console.error('❌ Erreur lors de la reconnexion périodique:', err);
          }
        });
      }
    }, 30000); // Toutes les 30 secondes
  }

  private initializeClient(): void {
    // console.log('🔧 Initialisation du client WebSocket avec endpoint:', this.config.endpoint);
    
    this.client = new Client({
      webSocketFactory: () => {
        // console.log('🔌 Création de la connexion SockJS vers:', this.config.endpoint);
        return new SockJS(this.config.endpoint);
      },
      reconnectDelay: this.config.reconnectDelay,
      heartbeatIncoming: this.config.heartbeatIncoming,
      heartbeatOutgoing: this.config.heartbeatOutgoing,
    });

    // Gestion des événements de connexion
    this.client.onConnect = (frame: Frame) => {
      // console.log('🟢 WebSocket connecté:', frame);
      // console.log('📋 Headers de connexion:', frame.headers);
      this.isConnected = true;
      this.reconnectAttempts = 0;
      this.connectionStatus$.next(true);
      this.connectionEvents$.next(WEBSOCKET_EVENTS.CONNECTED);
      
      // Nettoyer le timer de connexion
      if (this.connectionTimer) {
        clearTimeout(this.connectionTimer);
        this.connectionTimer = null;
      }
      
      // Réabonner aux topics après reconnexion
      this.resubscribeToTopics();
    };

    this.client.onDisconnect = () => {
      // console.log('🔴 WebSocket déconnecté - Raison inconnue');
      this.isConnected = false;
      this.connectionStatus$.next(false);
      this.connectionEvents$.next(WEBSOCKET_EVENTS.DISCONNECTED);
      this.scheduleReconnect();
    };

    this.client.onStompError = (frame) => {
      // console.error('❌ Erreur STOMP:', frame);
      // console.error('📋 Headers d\'erreur:', frame.headers);
      this.isConnected = false;
      this.connectionStatus$.next(false);
      this.connectionEvents$.next(WEBSOCKET_EVENTS.ERROR);
      this.scheduleReconnect();
    };

    this.client.onWebSocketError = (error) => {
      // console.error('❌ Erreur WebSocket:', error);
      // console.error('📋 Détails de l\'erreur:', error.type, error.target?.readyState);
      this.isConnected = false;
      this.connectionStatus$.next(false);
      this.connectionEvents$.next(WEBSOCKET_EVENTS.ERROR);
      this.scheduleReconnect();
    };

    this.client.onWebSocketClose = (event) => {
      // console.log('🔴 WebSocket fermé - Code:', event.code, 'Raison:', event.reason);
      // console.log('📋 Détails de fermeture:', event);
      this.isConnected = false;
      this.connectionStatus$.next(false);
      this.connectionEvents$.next(WEBSOCKET_EVENTS.DISCONNECTED);
      this.scheduleReconnect();
    };
  }

  private scheduleReconnect(): void {
    if (this.reconnectAttempts >= this.config.maxReconnectAttempts) {
      console.error('❌ Nombre maximum de tentatives de reconnexion atteint');
      return;
    }

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }

    // Reconnexion plus agressive : délai plus court
    const delay = Math.min(1000 * Math.pow(1.5, this.reconnectAttempts), 10000); // Max 10s au lieu de 30s
    
    // console.log(`🔄 Tentative de reconnexion dans ${delay}ms (tentative ${this.reconnectAttempts + 1}/${this.config.maxReconnectAttempts})`);
    this.connectionEvents$.next(WEBSOCKET_EVENTS.RECONNECTING);
    
    this.reconnectTimer = setTimeout(() => {
      this.reconnectAttempts++;
      // console.log(`🔄 Tentative de reconnexion ${this.reconnectAttempts}...`);
      
      // S'abonner à l'Observable de connexion
      this.connect().subscribe({
        next: (frame) => {
          // console.log(`✅ Reconnexion automatique ${this.reconnectAttempts} réussie:`, frame);
        },
        error: (err) => {
          console.error(`❌ Erreur lors de la reconnexion automatique ${this.reconnectAttempts}:`, err);
        }
      });
    }, delay);
  }

  private resubscribeToTopics(): void {
    // console.log('🔄 Réabonnement aux topics après reconnexion...');
    this.subscriptions.forEach((callback, topic) => {
      this.client.subscribe(topic, (message: IMessage) => {
        try {
          const data = JSON.parse(message.body);
          callback(data);
        } catch (error) {
          console.error('❌ Erreur parsing message:', error);
        }
      });
    });
  }

  public connect(): Observable<Frame> {
    // console.log('🚀 Tentative de connexion WebSocket...');
    
    return new Observable<Frame>(observer => {
      const jwt = this.authService.getToken();
      if (!jwt) {
        // console.error('❌ JWT manquant, impossible de se connecter au WS');
        observer.error(new Error('JWT manquant, impossible de se connecter au WS'));
        return;
      }

      // console.log('🔑 JWT trouvé, configuration des headers...');

      // Si déjà connecté, ne pas reconnecter
      if (this.isConnected) {
        // console.log('✅ Déjà connecté, pas de reconnexion nécessaire');
        observer.next({} as Frame);
        observer.complete();
        return;
      }

      this.client.connectHeaders = {
        Authorization: `Bearer ${jwt}`
      };

      // console.log('📋 Headers de connexion configurés:', this.client.connectHeaders);

      // Timer de timeout de connexion
      this.connectionTimer = setTimeout(() => {
        // console.error('⏰ Timeout de connexion WebSocket');
        observer.error(new Error('Timeout de connexion WebSocket'));
        this.client.deactivate();
      }, this.config.connectionTimeout);

      // Gestion spéciale pour la première connexion
      const originalOnConnect = this.client.onConnect;
      this.client.onConnect = (frame: Frame) => {
        // console.log('🎯 Callback onConnect appelé');
        originalOnConnect(frame);
        observer.next(frame);
        observer.complete();
      };

      // console.log('🔌 Activation du client WebSocket...');
      
      try {
        this.client.activate();
        // console.log('✅ Client WebSocket activé avec succès');
      } catch (error) {
        console.error('❌ Erreur lors de l\'activation du client:', error);
        observer.error(error);
      }
    });
  }

  public disconnect(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }
    if (this.connectionTimer) {
      clearTimeout(this.connectionTimer);
    }
    this.client.deactivate();
    this.isConnected = false;
    this.connectionStatus$.next(false);
    this.connectionEvents$.next(WEBSOCKET_EVENTS.DISCONNECTED);
  }

  public subscribe(topic: string, callback: (msg: any) => void): void {
    // Stocker la subscription pour pouvoir la restaurer après reconnexion
    this.subscriptions.set(topic, callback);
    
    if (this.isConnected) {
      this.client.subscribe(topic, (message: IMessage) => {
        try {
          const data = JSON.parse(message.body);
          callback(data);
        } catch (error) {
          console.error('❌ Erreur parsing message:', error);
        }
      });
    }
  }

  public unsubscribe(topic: string): void {
    this.subscriptions.delete(topic);
    // Note: STOMP.js gère automatiquement la déconnexion des subscriptions
  }

  public send(destination: string, payload: any): void {
    if (this.isConnected) {
      this.client.publish({
        destination,
        body: JSON.stringify(payload)
      });
    } else {
      console.warn('⚠️ Impossible d\'envoyer le message, WebSocket non connecté');
    }
  }

  public getConnectionStatus(): Observable<boolean> {
    return this.connectionStatus$.asObservable();
  }

  public getConnectionEvents(): Observable<string> {
    return this.connectionEvents$.asObservable();
  }

  public isWebSocketConnected(): boolean {
    return this.isConnected;
  }

  public updateConfig(newConfig: Partial<WebSocketConfig>): void {
    this.config = { ...this.config, ...newConfig };
    console.log('⚙️ Configuration WebSocket mise à jour:', this.config);
  }

  public forceReconnect(): void {
    console.log('🔄 Reconnexion forcée...');
    
    // Réinitialiser les tentatives si on force la reconnexion
    this.reconnectAttempts = 0;
    
    // Nettoyer les timers existants
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    
    // Déconnecter proprement avant de reconnecter
    this.disconnect();
    
    // Attendre un peu avant de reconnecter
    setTimeout(() => {
      console.log('🔄 Lancement de la reconnexion forcée...');
      
      // S'abonner à l'Observable de connexion
      this.connect().subscribe({
        next: (frame) => {
          // console.log('✅ Reconnexion forcée réussie:', frame);
        },
        error: (err) => {
          console.error('❌ Erreur lors de la reconnexion forcée:', err);
        }
      });
    }, 1000);
  }
}
