import React from 'react';

import { Wrapper, Image, TitleWrapper, Title } from './styled';

const BlogPostPreview = ({ imgSrc, title }) => (
  <Wrapper>
    <Image src={imgSrc} />
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  </Wrapper>
);

export { BlogPostPreview };
