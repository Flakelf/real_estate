import React from 'react';

import avatar from './assets/avatar.png';

import { Arrow } from '../../../../ui/icons';

import { Wrapper, Avatar, Name } from './styled';

const Profile = ({ name }) => (
  <Wrapper>
    <Avatar src={avatar} alt='Avatar' />
    <Name>{name}</Name>
    <Arrow />
  </Wrapper>
);

export { Profile };
