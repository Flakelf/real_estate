import React, { useMemo } from 'react';

import { Facebook, Twitter } from '../../ui/icons';

import { Wrapper, Links, Link, Soc, CopyRight } from './styled';

const Footer = () => {
  const links = useMemo(
    () => [
      { pathname: '/about', title: 'About' },
      { pathname: '/help', title: 'Help' },
      { pathname: '/search', title: 'Search' },
      { pathname: '/ad', title: 'Advertise' },
      { pathname: '/terms', title: 'Terms of use & Privacy' },
      { pathname: '/blog', title: 'Blog' },
      { pathname: '/mobile-apps', title: 'Mobile Apps' },
    ],
    [],
  );

  return (
    <Wrapper>
      <Soc>
        <Facebook />
        <Twitter />
      </Soc>

      <Links>
        {links.map((link, index) => (
          <Link key={index} to={link.pathname}>
            {link.title}
          </Link>
        ))}
      </Links>

      <CopyRight>Copyright © 2019. All Rights Reserved.</CopyRight>
    </Wrapper>
  );
};

export { Footer };
