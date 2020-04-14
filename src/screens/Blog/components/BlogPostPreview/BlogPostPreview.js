import React from 'react';

import { Wrapper, TitleWrapper, Title } from './styled';

const BlogPostPreview = ({ imgSrc, title }) => (
  <Wrapper imgSrc={imgSrc}>
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  </Wrapper>
);

export { BlogPostPreview };
