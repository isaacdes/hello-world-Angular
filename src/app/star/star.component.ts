import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  isStar : boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isStar = !this.isStar;
  }
}
