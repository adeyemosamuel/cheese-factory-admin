import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerfooterComponent } from './makerfooter.component';

describe('MakerfooterComponent', () => {
  let component: MakerfooterComponent;
  let fixture: ComponentFixture<MakerfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
