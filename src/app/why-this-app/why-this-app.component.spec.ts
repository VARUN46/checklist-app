import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyThisAppComponent } from './why-this-app.component';

describe('WhyThisAppComponent', () => {
  let component: WhyThisAppComponent;
  let fixture: ComponentFixture<WhyThisAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyThisAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyThisAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
