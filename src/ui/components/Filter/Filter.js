import React from 'react';

import { Arrows } from '../../icons';

import { Wrapper, Control } from './styled';

const Filter = props => (
  <Wrapper>
    <Control {...props} />
    <Arrows />
  </Wrapper>
);

export { Filter };
