import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemodalComponent } from './phonemodal.component';

describe('PhonemodalComponent', () => {
  let component: PhonemodalComponent;
  let fixture: ComponentFixture<PhonemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
