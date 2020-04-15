import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Blog } from '../screens';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/blog' component={Blog} />
      <Route path='*' component={Blog} />
    </Switch>
  </BrowserRouter>
);

export { Router };
