import {Component, Injectable, OnInit} from 'angular2/core';
import {Control, FORM_DIRECTIVES, DatePipe} from 'angular2/common';
import {ArticleSearchPanel} from './article-search-panel.component.ts';
import {ArticleSearchPanelPipe} from './article-search-panel.pipe.ts';
import {GuardianService} from '../../shared/services/guardian.service.ts';

@Component({
  selector: 'article-list',
  pipes: [ArticleSearchPanelPipe, DatePipe],
  providers: [GuardianService],
  templateUrl: 'app/components/article-list/article-list.html',
  directives: [FORM_DIRECTIVES, ArticleSearchPanel]
})

@Injectable()
export class ArticleList implements OnInit {
  searchBox:Control = new Control();
  articles = [];
  searchTerms;


  constructor(private guardianService: GuardianService) {
  }

  ngOnInit() {
    this.searchBox
      .valueChanges
      .debounceTime(200)
      .filter(inputValue => inputValue !== '')
      .subscribe((inputValue) => {
        this.reloadGuardianSearch(inputValue);
      })
  }

  reloadGuardianSearch(inputValue) {
    this.guardianService.onSearch(inputValue)
      .subscribe(result => {
        this.articles = result;
        this.updatePipe(this.searchTerms)
      }, error => console.error('Error loading articles', error));
  }

  updatePipe(searchTerms) {
    //Force searchTerms to be inmutable
    this.searchTerms = Object.assign({}, searchTerms);
  }

  stringAsDate(dateStr) {
    return (dateStr !== undefined) ? new Date(dateStr) : new Date();
  }
}
