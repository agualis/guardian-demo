import {Component, Output, Injectable, EventEmitter} from 'angular2/core';

@Component({
  selector: 'date-picker',
  template: `
    <input type="date" (change)="sendChangeEvent($event.target.value)" [(ngModel)]="inputValue" >
   `
})

@Injectable()
export class DatePicker {
  @Output() dateSearchChanged = new EventEmitter();
  inputValue: string;

  sendChangeEvent(value) {
    this.dateSearchChanged.emit(value);
  }
}
