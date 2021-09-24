import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { connect } from 'webcomponents-redux';

@Component({
  selector: 'lib-portal-modal',
  templateUrl: './portal-modal.component.html',
  styleUrls: ['./portal-modal.component.css']
})
export class PortalModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() body: string = '';
  @Output() saveClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  sendRequest() {
    this.saveClicked.emit('kjdaslkfhjalskdhflksdhf');
  }

}
