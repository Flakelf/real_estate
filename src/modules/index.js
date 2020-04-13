import { createStore, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { REDUCER_NAME as AUTH } from './auth/constants';
import authReducer from './auth/reducer';

import { REDUCER_NAME as BLOG } from './blog/constants';
import blogReducer from './blog/reducer';

const reducers = {
  [AUTH]: authReducer,
  [BLOG]: blogReducer,
};

const middlewareEnhancer = composeWithDevTools();

const store = createStore(combineReducers(reducers), compose(middlewareEnhancer));

export { store };
