import {
  ARTICLES_FETCH,
  ARTICLES_FETCH_SUCCESSFUL,
  ARTICLES_FETCH_FAILED,
} from './actions';

const initialState = {
  fetching: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_FETCH:
      return Object.assign({}, state, { fetching: true });
    case ARTICLES_FETCH_SUCCESSFUL:
      return Object.assign({}, state, { items: action.articles, fetching: false });
    case ARTICLES_FETCH_FAILED:
      return Object.assign({}, state, { fetching: false });
    default:
      return state;
  }
}