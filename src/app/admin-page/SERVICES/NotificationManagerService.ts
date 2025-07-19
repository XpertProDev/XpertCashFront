import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { GlobalNotificationDto } from "../MODELS/global_notification.dto";
import { GlobalNotificationService } from "./global_notification_service";
import { WebSocketService } from "./websocket.service";

@Injectable({ providedIn: 'root' })
export class NotificationManagerService {
  private notificationsSubject = new BehaviorSubject<GlobalNotificationDto[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  constructor(private webSocketService: WebSocketService, private globalNotificationService: GlobalNotificationService) {
    this.init();
  }

  private init() {
    this.globalNotificationService.getAllForCurrentUser()
      .subscribe(list => this.notificationsSubject.next(list));

    this.webSocketService.connect();
    this.webSocketService.notifications$
      .subscribe((newNotif: GlobalNotificationDto) => {
        if (newNotif) {
          const currentList = this.notificationsSubject.value;
          this.notificationsSubject.next([newNotif, ...currentList]);
        }
      });
  }

  getNotifications(): Observable<GlobalNotificationDto[]> {
    return this.notifications$;
  }
}