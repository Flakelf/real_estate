import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header, Footer } from '../components';

import { Blog } from '../screens';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/blog' component={Blog} />
      <Route path='*' component={() => <h1>Not found</h1>} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export { Router };
