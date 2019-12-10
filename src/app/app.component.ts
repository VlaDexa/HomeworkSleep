// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';
// tslint:disable-next-line: no-conflicting-lifecycle

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
        <input [(ngModel)]=text>

        <app-input [text]=text></app-input>` ,
})
// tslint:disable-next-line: max-line-length
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
  }
  title = 'hek';
  text = 'Привет';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }
  ngAfterContentInit() {

  }
  ngAfterContentChecked() {

  }
  ngAfterViewInit() {

  }
  ngAfterViewChecked() {

  }
  ngOnInit() {
    console.log('hell na');
  }
  ngOnDestroy() {

  }
}


