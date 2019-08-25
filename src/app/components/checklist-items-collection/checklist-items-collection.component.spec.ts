import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistItemsCollectionComponent } from './checklist-items-collection.component';

describe('ChecklistItemsCollectionComponent', () => {
  let component: ChecklistItemsCollectionComponent;
  let fixture: ComponentFixture<ChecklistItemsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistItemsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistItemsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
