import { Component, OnInit, Input } from '@angular/core';
import {Slide} from '../../../Models/Slide';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent implements OnInit {

  @Input() SlideList:Slide[];

  constructor() { }

  ngOnInit() {
  }

}
