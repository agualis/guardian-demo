import {Pipe} from "angular2/core";

@Pipe({
  name: "search",
  pure: true
})
export class ArticleSearchPanelPipe {

  transform(articles, args) {
    const searchTerms  = args[0];
    if (emptySearchTerms(searchTerms)) return articles;
    return articles.filter((article) => {
      return filterArticle(article, searchTerms);
    });
  }
}

function emptySearchTerms(searchTerms) {
  return searchTerms === undefined || Object.keys(searchTerms).length === 0;
}

function filterArticle(article, searchTerms) {
  return includes(article, searchTerms, 'webTitle')
    && includes(article, searchTerms, 'sectionName')
    && filterDate(article, searchTerms, 'webPublicationDate')
}

function filterDate(article, searchTerms, fieldName) {
  if (!article.hasOwnProperty(fieldName)) return false;
  if (searchTerms.hasOwnProperty(fieldName)) {
    return article[fieldName].startsWith(searchTerms[fieldName]);
  } else {
    return true;
  }
}

function includes(article, searchTerms, fieldName) {
  if (searchTerms.hasOwnProperty(fieldName)) {
    return article[fieldName].toUpperCase().includes(searchTerms[fieldName].toUpperCase());
  }
  return true;
}



