import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Slide } from '../../../Models/Slide';
import { timer } from 'rxjs';

@Component({
  selector: 'app-slide-active',
  templateUrl: './slide-active.component.html',
  styleUrls: ['./slide-active.component.css']
})
export class SlideActiveComponent implements OnInit {

  @Input() ActiveSlide: Slide;
  @Output() ChangeSlideEvent:EventEmitter<Slide>= new EventEmitter;

  constructor() { }

  ngOnInit() {

    


  }

}
