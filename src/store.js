/**
 * Created by Caowenjuan on 17/3/22.
 */
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { routerMiddleware } from 'react-router-redux';
import amumu from 'amumu';
import { hashHistory, browserHistory } from 'react-router';
import AppInfo from '../AppInfo';
const prod = AppInfo.prod;

const history = hashHistory;
const reduxRouterMiddleware = routerMiddleware(history);
let createStoreWithMiddleware;
if (prod) {
  createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware
  )(createStore);
}

const store = createStoreWithMiddleware(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const handleSubscribe = () => {
  amumu.redux.Global.setStore(store.getState());
};
store.subscribe(handleSubscribe);

amumu.redux.Global.setDispatch(store.dispatch);

export default store;

export const dispatch = store.dispatch;