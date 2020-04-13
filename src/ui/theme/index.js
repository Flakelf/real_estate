import React from 'react';
import { ThemeProvider } from 'styled-components';

import variables from './variables';

const theme = {
  ...variables,
};

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { CustomThemeProvider };
export { GlobalStyles } from './globalStyles';
