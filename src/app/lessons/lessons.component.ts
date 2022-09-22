import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  selected: Date  | any;
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
