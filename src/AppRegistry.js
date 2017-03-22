/**
 * Created by Caowenjuan on 16/12/1.
 */
// 引入ant-design样式
require('antd/dist/antd.min.css');
import React from 'react';
import store from './store';
import routes from './routes';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { hashHistory, Router } from 'react-router';
import AppInfo from '../AppInfo';

const rootElement = document.getElementById('app');

export function AppRegistry(){
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