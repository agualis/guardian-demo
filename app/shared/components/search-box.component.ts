import {Component, Output, Injectable, EventEmitter, Input} from 'angular2/core';

@Component({
  selector: 'search-box',
  template: `<input #input type="text" (input)="textSearchEntered.emit(input.value)" [placeholder]="placeHolder">`
})

@Injectable()
export class SearchBox {
  @Input() placeHolder = "Search";
  @Output() textSearchEntered = new EventEmitter();
}
