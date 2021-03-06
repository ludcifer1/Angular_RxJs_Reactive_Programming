import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from './bus';
import { lessons } from '../shared/model/test-lesson';

@Component({
  selector: 'event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.css']
})
export class EventBusComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Top level broadcast all lessons');

    globalEventBus.notifyObserver(LESSONS_LIST_AVAILABLE, lessons.slice(0));
  }
}
