import { TestBed } from '@angular/core/testing';

import { ItemsManagerService } from './items-manager.service';

describe('ItemsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsManagerService = TestBed.get(ItemsManagerService);
    expect(service).toBeTruthy();
  });
});
