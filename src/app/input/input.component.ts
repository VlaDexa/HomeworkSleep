import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  template: `<h2>Дитя</h2>
    {{ text }}
  `
})
export class InputComponent implements OnInit, OnChanges {
  @Input() text: number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }
}
