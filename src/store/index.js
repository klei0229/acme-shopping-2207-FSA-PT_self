import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';

const reducer = combineReducers({
  auth
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
