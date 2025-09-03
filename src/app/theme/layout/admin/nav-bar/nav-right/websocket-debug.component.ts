import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from 'src/app/admin-page/SERVICES/websocket.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-websocket-debug',
 

})
export class WebSocketDebugComponent implements OnInit, OnDestroy {
  showDebug = false;
  isConnected = false;
  currentEvent = '';
  reconnectAttempts = 0;
  maxReconnectAttempts = 10;
  logs: Array<{time: Date, message: string}> = [];
  
  private destroy$ = new Subject<void>();

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // Surveiller le statut de connexion
    this.webSocketService.getConnectionStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe(isConnected => {
        this.isConnected = isConnected;
        this.addLog(`Statut changé: ${isConnected ? 'Connecté' : 'Déconnecté'}`);
      });

    // Surveiller les événements de connexion
    this.webSocketService.getConnectionEvents()
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => {
        this.currentEvent = event;
        this.addLog(`Événement: ${event}`);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDebug(): void {
    this.showDebug = !this.showDebug;
  }

  forceReconnect(): void {
    this.addLog('Reconnexion forcée...');
    this.webSocketService.forceReconnect();
  }

  testMessage(): void {
    this.addLog('Envoi d\'un message de test...');
    this.webSocketService.send('/user/queue/test', {
      message: 'Test de connexion WebSocket',
      timestamp: new Date().toISOString()
    });
  }

  refreshStatus(): void {
    this.addLog('Actualisation du statut...');
    // Le statut sera mis à jour automatiquement via les observables
  }

  private addLog(message: string): void {
    this.logs.unshift({
      time: new Date(),
      message: message
    });
    
    // Garder seulement les 50 derniers logs
    if (this.logs.length > 50) {
      this.logs = this.logs.slice(0, 50);
    }
  }
}
