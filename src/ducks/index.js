import { combineReducers } from 'redux';

import articleList from './articleList';
import article from './article';

export default combineReducers({
  articleList,
  article,
});

