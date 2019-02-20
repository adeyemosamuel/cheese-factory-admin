import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerlayoutComponent } from './makerlayout.component';

describe('MakerlayoutComponent', () => {
  let component: MakerlayoutComponent;
  let fixture: ComponentFixture<MakerlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
