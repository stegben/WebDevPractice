import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Home from './Component/Home'
import ChatRoom from './Component/ChatRoom'
import NoFound from './Component/NoFound'

export default (
  <Route path='/'>
    <IndexRoute component={Home} />
    <Route path='chat' component={ChatRoom} />
    <Route path='*' component={NoFound} />
  </Route>
);
