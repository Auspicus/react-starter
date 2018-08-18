import { combineReducers } from 'redux';

import articles from './Articles/reducer';

export default combineReducers({
  articles,
});