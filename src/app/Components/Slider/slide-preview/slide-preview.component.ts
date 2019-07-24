import { Component, OnInit, Input } from '@angular/core';
import {Slide} from '../../../Models/Slide';

@Component({
  selector: 'app-slide-preview',
  templateUrl: './slide-preview.component.html',
  styleUrls: ['./slide-preview.component.css']
})
export class SlidePreviewComponent implements OnInit {

  @Input() Slide:Slide;

  constructor() { }

  ngOnInit() {
  }

  calculateFontSize(){
    return {
      'font-size':this.Slide.productName.length>10 ? ''+160/this.Slide.productName.length+'em' : 80/this.Slide.productName.length+'em',
    }
  }

}
