import { 
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

const createHistory = require('history').createHashHistory;
const history= createHistory();
const routerWare = routerMiddleware(history);

import user from './reducers/user';

const reducers: any = combineReducers({
  user
})

export default createStore(reducers, applyMiddleware(thunk, routerWare));