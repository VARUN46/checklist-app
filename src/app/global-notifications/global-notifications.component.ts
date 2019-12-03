import { Component, OnInit } from '@angular/core';
import { GlobalNotificationManagerService } from '../services/global-notification-manager.service';
import { Notification } from '../entities/notification';

@Component({
  selector: 'app-global-notifications',
  templateUrl: './global-notifications.component.html',
  styleUrls: ['./global-notifications.component.css']
})
export class GlobalNotificationsComponent implements OnInit {

  public notifications: Array<Notification>;
  public notificationService: GlobalNotificationManagerService;

  constructor(notificationsvc: GlobalNotificationManagerService) {
    this.notificationService = notificationsvc;
    this.notifications = this.notificationService.notifications;
  }

  ngOnInit() {
  }

  clearClickHandler() {
    this.notificationService.clear();
  }

  hideClickHandler() {
    this.notificationService.isVisible = false;
  }

}
