import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  template: `<h2>Дитя</h2>
    {{ text }}
  `
})
// tslint:disable-next-line: max-line-length
export class InputComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck  {
  @Input() text: number;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngOnInit() {
    console.log('OnInit');
  }
  ngDoCheck(){
    console.log('DoCheck')
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
