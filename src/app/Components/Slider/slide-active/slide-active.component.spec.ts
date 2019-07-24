import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideActiveComponent } from './slide-active.component';

describe('SlideActiveComponent', () => {
  let component: SlideActiveComponent;
  let fixture: ComponentFixture<SlideActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
