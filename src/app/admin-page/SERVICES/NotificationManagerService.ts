import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { GlobalNotificationDto } from "../MODELS/global_notification.dto";
import { GlobalNotificationService } from "./global_notification_service";
import { WebSocketService } from "./websocket.service";

@Injectable({ providedIn: 'root' })
export class NotificationManagerService {
  private notificationsSubject = new BehaviorSubject<GlobalNotificationDto[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();
  private newNotificationSubject = new Subject<GlobalNotificationDto>();
  public newNotification$ = this.newNotificationSubject.asObservable();

  constructor(
    private webSocketService: WebSocketService, 
    private globalNotificationService: GlobalNotificationService
  ) {
    this.init();
  }

  private init() {
    console.log('🚀 NotificationManagerService initialisé');
    
    // Charger les notifications initiales
    this.loadInitialNotifications();
    
    // Se connecter au WebSocket et s'abonner immédiatement
    this.setupWebSocketConnection();
    
    // Surveiller le statut de connexion pour recharger les notifications
    this.webSocketService.getConnectionStatus().subscribe(isConnected => {
      // console.log('📡 Statut WebSocket dans NotificationManager:', isConnected ? 'Connecté' : 'Déconnecté');
      
      if (isConnected) {
        // console.log('🔄 WebSocket connecté, rechargement des notifications...');
        // Recharger les notifications
        this.loadInitialNotifications();
      } else {
        // console.log('🔴 WebSocket déconnecté');
      }
    });
  }

  private loadInitialNotifications() {
    this.globalNotificationService.getAllForCurrentUser()
      .subscribe({
        next: (notifications) => {
          this.notificationsSubject.next(notifications || []);
        },
        error: (err) => {
          console.error('❌ Erreur lors du chargement des notifications:', err);
        }
      });
  }

  private setupWebSocketConnection() {
    // console.log('🔌 Tentative de connexion WebSocket...');
    
    this.webSocketService.connect().subscribe({
      next: (frame) => {
        // console.log('✅ WebSocket connecté avec succès:', frame);
        // S'abonner aux nouvelles notifications via WebSocket
        this.setupWebSocketSubscription();
      },
      error: (err) => {
        console.error('❌ Erreur de connexion WebSocket:', err);
        // La reconnexion sera gérée automatiquement par le service
      }
    });
  }

  private setupWebSocketSubscription() {
    // console.log('🔌 Configuration de l\'abonnement WebSocket aux notifications...');
    
    // S'abonner au topic de notifications
    this.webSocketService.subscribe('/user/queue/notifications', (newNotif: GlobalNotificationDto) => {
      // console.log('🥳 Nouvelle notification reçue dans NotificationManager:', newNotif);
      
      if (newNotif) {
        // Marquer comme non lue
        newNotif.read = false;
        
        // Ajouter au début de la liste
        const currentList = this.notificationsSubject.value;
        const updatedList = [newNotif, ...currentList];
        this.notificationsSubject.next(updatedList);
        
        // console.log('📝 Liste des notifications mise à jour:', updatedList);
        
        // Émettre l'événement de nouvelle notification
        this.newNotificationSubject.next(newNotif);
        // console.log('📢 Événement de nouvelle notification émis');
      }
    });
    
    // console.log('✅ Abonnement WebSocket configuré');
  }

  public getNotifications(): Observable<GlobalNotificationDto[]> {
    return this.notifications$;
  }

  public getNewNotifications(): Observable<GlobalNotificationDto> {
    return this.newNotification$;
  }

  public markAsRead(notificationId: number): void {
    const currentList = this.notificationsSubject.value;
    const updatedList = currentList.map(notif => 
      notif.id === notificationId ? { ...notif, read: true } : notif
    );
    this.notificationsSubject.next(updatedList);
  }

  public markAllAsRead(): void {
    const currentList = this.notificationsSubject.value;
    const updatedList = currentList.map(notif => ({ ...notif, read: true }));
    this.notificationsSubject.next(updatedList);
  }

  public getUnreadCount(): number {
    return this.notificationsSubject.value.filter(notif => !notif.read).length;
  }

  public refreshNotifications(): void {
    this.loadInitialNotifications();
  }

  // Méthode pour simuler l'envoi d'une notification (pour les tests)
  public simulateNotification(message: string, senderName: string = 'Système'): void {
    const simulatedNotification: GlobalNotificationDto = {
      id: Date.now(),
      message: message,
      senderName: senderName,
      createdAt: new Date().toISOString(),
      read: false
    };

    console.log('🧪 Simulation de notification:', simulatedNotification);
    
    // Ajouter au début de la liste
    const currentList = this.notificationsSubject.value;
    const updatedList = [simulatedNotification, ...currentList];
    this.notificationsSubject.next(updatedList);
    
    // Émettre l'événement de nouvelle notification
    this.newNotificationSubject.next(simulatedNotification);
  }
}