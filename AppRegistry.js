/**
 * Created by Caowenjuan on 16/12/1.
 */
// 引入ant-design样式
require('antd-mobile/dist/antd-mobile.min.css');
import React from 'react';
import routes from './routes';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { hashHistory, Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const rootElement = document.getElementById('app');

export function AppRegistry(){
  // 注意保证在整个项目中初始化一次
  const logger = createLogger();
  const store = applyMiddleware(thunk, logger)(createStore)(reducer);
  render(
    <Provider
      store={store}
    >
      {/* Your root Component*/}
      <Router
        history={hashHistory}
      >
        {routes}
      </Router>
    </Provider>,
  rootElement
  );
}