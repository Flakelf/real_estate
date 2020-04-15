import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container } from '../ui/components';
import { Header, Footer } from '../components';

import { Blog } from '../screens';

const Router = () => (
  <BrowserRouter>
    <Container>
      <Header />
    </Container>
    <Switch>
      <Route exact path='/blog' component={Blog} />
      <Route path='*' component={Blog} />
    </Switch>
    <Container>
      <Footer />
    </Container>
  </BrowserRouter>
);

export { Router };
