import React from 'react';

import { Control } from './styled';

const Button = ({ children }) => (
  <Control onClick={() => console.log('Clicked')}>{children}</Control>
);

export { Button };
