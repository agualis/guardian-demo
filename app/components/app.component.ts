import {Component} from 'angular2/core';
import 'rxjs/Rx';
import {ArticleList} from './article-list/article-list.component.ts';

@Component({
  selector: 'app-root',
  directives: [ArticleList],
  template: '<article-list></article-list>'
})

export class AppComponent {
  constructor() {
  }
}
