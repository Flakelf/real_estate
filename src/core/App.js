import React from 'react';
import { Provider } from 'react-redux';

import { GlobalStyles, CustomThemeProvider } from '../ui/theme';
import { Layout } from '../ui/components';
import { store } from '../modules';

import { Router } from './routeConfig';

const App = () => (
  <React.Fragment>
    <Provider store={store}>
      <GlobalStyles />
      <CustomThemeProvider>
        <Layout>
          <Router />
        </Layout>
      </CustomThemeProvider>
    </Provider>
  </React.Fragment>
);

export default App;
