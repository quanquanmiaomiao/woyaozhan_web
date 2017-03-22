/**
 * Created by Caowenjuan on 16/12/1.
 */
import React from 'react';
import { Route, IndexRoute,Link } from 'react-router';
import AppContainer  from './container/AppContainer';
import HomePageContainer  from './container/HomePageContainer';
import * as RouteURL from './RouteURL';

// 注意path 的意义是访问时候的地址
const routes = (
  <Route path={RouteURL.App()} component={AppContainer} >
    <IndexRoute component={HomePageContainer} />
  </Route>
);

export default routes;