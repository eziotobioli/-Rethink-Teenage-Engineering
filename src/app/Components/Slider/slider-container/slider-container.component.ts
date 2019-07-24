import { Component, OnInit } from '@angular/core';
import {Slide} from '../../../Models/Slide';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.css']
})
export class SliderContainerComponent implements OnInit {

  SlideData:Slide[];
  ActiveSlide:Slide;

  constructor() { }

  ngOnInit() {


    this.SlideData=[
      {
        id:1,
        imgUrl:'../../../../assets/p1.png',
        productName:'Pocket Synthetizer',
      },
      {
        id:2,
        imgUrl:'../../../../assets/p2.png',
        productName:'OP-11',
      },
      {
        id:3,
        imgUrl:'../../../../assets/p3.jpg.png',
        productName:'OPLAB',
      }
    ]

    this.ActiveSlide=this.SlideData[0];

    
  }

}
