import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ITLab';
  urlPage = ''
  constructor(private route:Router) {
  }

  ngOnInit(): void {
    this.route.events.subscribe(res => {
      if(res instanceof NavigationEnd){
        if(res.url == "/registration-page"){
          this.urlPage = "blue"
        }else if(res.url == "/about-course"){
          this.urlPage = "blue"
        }else if(res.url == "/about-course-javascript"){
          this.urlPage = "blue"
        }else if(res.url == "/about-course-php"){
          this.urlPage = "blue"
        }else{
          this.urlPage = ""
        }


      }
    })
  }


}
