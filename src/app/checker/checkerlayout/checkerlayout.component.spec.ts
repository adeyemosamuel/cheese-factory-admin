import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerlayoutComponent } from './checkerlayout.component';

describe('CheckerlayoutComponent', () => {
  let component: CheckerlayoutComponent;
  let fixture: ComponentFixture<CheckerlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckerlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
