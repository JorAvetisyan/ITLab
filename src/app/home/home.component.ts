import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stars:any = [
    {
      id: 1,
      src: "assets/Images/star.png"
    },
    {
      id: 2,
      src: "assets/Images/star.png"
    },
    {
      id: 3,
      src: "assets/Images/star.png"
    },
    {
      id: 4,
      src: "assets/Images/star.png"
    },
    {
      id: 5,
      src: "assets/Images/star.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }


}
