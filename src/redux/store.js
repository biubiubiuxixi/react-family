import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import combineReducers from './reducers.js';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleWare));

export default store;