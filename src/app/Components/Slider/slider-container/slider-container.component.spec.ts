import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContainerComponent } from './slider-container.component';

describe('SliderContainerComponent', () => {
  let component: SliderContainerComponent;
  let fixture: ComponentFixture<SliderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
