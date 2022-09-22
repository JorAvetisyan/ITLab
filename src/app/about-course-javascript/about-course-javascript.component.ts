import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-course-javascript',
  templateUrl: './about-course-javascript.component.html',
  styleUrls: ['./about-course-javascript.component.css']
})
export class AboutCourseJavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
