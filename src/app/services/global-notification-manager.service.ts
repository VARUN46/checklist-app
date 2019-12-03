import { Injectable } from '@angular/core';
import { Notification } from '../entities/notification';

@Injectable({
  providedIn: 'root'
})
export class GlobalNotificationManagerService {

  public notifications: Array<Notification> = new Array<Notification>();

  public isVisible = false;

  constructor() { }

  add(notification: Notification) {
    if (typeof(notification.type) === 'undefined') {
      notification.type = 'info';
    }
    this.notifications.push(notification);
    this.isVisible = true;
  }

  clear() {
    this.notifications.splice(0, this.notifications.length);
    this.isVisible = false;
  }



}
