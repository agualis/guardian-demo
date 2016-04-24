import {Component, Injectable, Output, EventEmitter} from 'angular2/core';
import {SearchBox} from './../../shared/components/search-box.component.ts';
import {DatePicker} from '../../shared/components/date-picker.component';

@Component({
  selector: 'article-search-panel',
  templateUrl: 'app/components/article-list/article-search-panel.html',
  directives: [SearchBox, DatePicker]
})

@Injectable()
export class ArticleSearchPanel {
  @Output() searchTermsChanged = new EventEmitter();
  searchTerms = {};

  updateSearchTerms(termName, value) {
    this.searchTerms[termName] = value;
    this.searchTermsChanged.emit(this.searchTerms);
  }
}

