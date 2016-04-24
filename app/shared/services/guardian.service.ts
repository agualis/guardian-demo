import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

const GUARDIAN_SEARCH_API_URL = 'http://content.guardianapis.com/search?page-size=200&api-key=test'

@Injectable()
export class GuardianService {
  constructor(private http: Http) {}

  onSearch(searchTerm) {
    return this.http.get(GUARDIAN_SEARCH_API_URL + '&q=' + searchTerm).map((response) => {
      return response.json().response.results;
    });
  }
}
