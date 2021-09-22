import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { connect } from 'webcomponents-redux';

@Component({
  selector: 'lib-components',
  template: `
    <h1>{{ title }}</h1>
    <p>
      {{ body }}
    </p>
    <button (click)="sendRequest()"></button>
  `,
  styles: [
  ]
})
export class ComponentsComponent implements OnInit {
  @Input() title: string = '';
  @Input() body: string = '';
  @Output() saveClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  sendRequest() {
    this.saveClicked.emit('kjdaslkfhjalskdhflksdhf');
  }

}
