import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  template: `<h2>Child Component</h2>
    current count is {{ count }}
  `
})
export class InputComponent implements OnInit, OnChanges {
  @Input() count: number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }
}
