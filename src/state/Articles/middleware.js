import {
  ARTICLES_FETCH, fetchArticlesSuccessful,
} from './actions';

const getArticles = cb => {
  setTimeout(() => {
    cb([
      {
        id: "article-1",
        title: "Article 1",
        body: "### Heading 3\n#### Heading 4"
      },
      {
        id: "article-2",
        title: "Article 2",
        body: "### Heading 3\n#### Heading 4"
      },
      {
        id: "article-3",
        title: "Article 3",
        body: "### Heading 3\n#### Heading 4"
      },
      {
        id: "article-4",
        title: "Article 4",
        body: "### Heading 3\n#### Heading 4"
      }
    ])
  }, 500);
};

export default (store) => next => action => {
  switch (action.type) {
    case ARTICLES_FETCH:
      getArticles(articles => store.dispatch(fetchArticlesSuccessful(articles)));
      break;
    default:
  }

  return next(action);
}
