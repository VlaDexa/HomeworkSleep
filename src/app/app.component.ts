// tslint:disable-next-line: max-line-length
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-conflicting-lifecycle

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
// tslint:disable-next-line: max-line-length
export class AppComponent implements OnInit {
  constructor() {
  }
  title = 'hek';
  text = 'Привет';
  chcboxe = 1;

  chcbox = 0;
  ngOnInit() {

  }
scnd() {
  this.chcbox--;
}
}


