import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Root reducer
import rootReducer from './reducers/index.js';

// Default data
import comments from './data/comments.js';
import posts from './data/posts.js';

// Object for default data
const defaultState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;