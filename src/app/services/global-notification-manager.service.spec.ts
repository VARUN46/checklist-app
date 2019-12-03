import { TestBed } from '@angular/core/testing';

import { GlobalNotificationManagerService } from './global-notification-manager.service';

describe('GlobalNotificationManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalNotificationManagerService = TestBed.get(GlobalNotificationManagerService);
    expect(service).toBeTruthy();
  });
});
