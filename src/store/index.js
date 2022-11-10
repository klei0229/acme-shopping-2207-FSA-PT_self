import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import cart from './cart';
import bundles from './bundles';
import orders from './orders.js';

const reducer = combineReducers({
  auth,
  cart,
  bundles,
  orders,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
export * from './auth';
export * from './cart';
export * from './bundles';
export * from './orders';
