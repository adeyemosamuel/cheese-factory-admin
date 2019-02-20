import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerdashboardComponent } from './checkerdashboard.component';

describe('CheckerdashboardComponent', () => {
  let component: CheckerdashboardComponent;
  let fixture: ComponentFixture<CheckerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
