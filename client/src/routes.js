import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';
import App from './components/app';
import Home from './components/home';
import AdminAssets from './components/admin-assets';
import AdminUsers from './components/admin-users';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='admin-assets' component={AdminAssets} />
    <Route path='admin-users' component={AdminUsers} />
    <Route path='admin-users-save' component={AdminUsers} />
  </Route>
);