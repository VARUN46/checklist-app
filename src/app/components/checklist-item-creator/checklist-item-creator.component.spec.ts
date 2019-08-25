import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistItemCreatorComponent } from './checklist-item-creator.component';

describe('ChecklistItemCreatorComponent', () => {
  let component: ChecklistItemCreatorComponent;
  let fixture: ComponentFixture<ChecklistItemCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistItemCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistItemCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
