export const getArticleById = (articleStore, id) => 
  articleStore
  .items
  .filter(article => article.id === id)[0];