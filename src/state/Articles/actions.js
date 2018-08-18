export const ARTICLES_FETCH = 'ARTICLES_FETCH';
export const ARTICLES_FETCH_SUCCESSFUL = 'ARTICLES_FETCH_SUCCESSFUL';
export const ARTICLES_FETCH_FAILED = 'ARTICLES_FETCH_FAILED';

export const fetchArticles = () => ({
  type: ARTICLES_FETCH,
});
export const fetchArticlesSuccessful = articles => ({
  type: ARTICLES_FETCH_SUCCESSFUL,
  articles,
});
export const fetchArticlesFailed = () => ({
  type: ARTICLES_FETCH_FAILED
});
