import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getName } from '../../modules/auth/selectors';

import { Arrow } from '../../ui/icons';
import { Button } from '../../ui/components';

import { Profile } from './components';

import { Wrapper, Links, Link, RightSide, LanguageSelect, Language } from './styled';

const Header = () => {
  const { pathname: currentPath } = useLocation();
  const name = useSelector(getName);

  const links = useMemo(
    () => [
      { pathname: '/', title: 'Home' },
      { pathname: '/buy', title: 'Buy' },
      { pathname: '/rent', title: 'Rent' },
      { pathname: '/sell', title: 'Sell' },
      { pathname: '/blog', title: 'Blog' },
      { pathname: '/help', title: 'Help' },
    ],
    [],
  );

  return (
    <Wrapper>
      <Links>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.pathname}
            activeClassName='selected'
            isActive={() => currentPath === link.pathname}
          >
            {link.title}
          </Link>
        ))}
      </Links>
      <RightSide>
        <LanguageSelect>
          <Language>Eng</Language>
          <Arrow />
        </LanguageSelect>
        {name ? <Profile name={name} /> : <Button>Sign up / Log in</Button>}
      </RightSide>
    </Wrapper>
  );
};

export { Header };
