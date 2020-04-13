import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header, Footer } from '../components';

import { Blog } from '../screens';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/blog' component={Blog} />
      <Route path='*' component={Blog} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export { Router };
