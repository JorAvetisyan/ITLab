import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-blue-header',
  templateUrl: './blue-header.component.html',
  styleUrls: ['./blue-header.component.css']
})
export class BlueHeaderComponent implements OnInit {

  constructor(public el:ElementRef) { }

  ngOnInit(): void {
  }

}
