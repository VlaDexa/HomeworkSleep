// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';
// tslint:disable-next-line: no-conflicting-lifecycle

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
        <h1>Welcome to {{title}}!</h1>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
        <app-input [count]=Counter></app-input>` ,
})
// tslint:disable-next-line: max-line-length
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
  }
  title = 'hek';
  Counter = 5;

  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }
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


