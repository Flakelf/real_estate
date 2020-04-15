import React from 'react';

import { Wrapper, Image, TitleWrapper, Title } from './styled';

const BlogPostPreview = ({ imgSrc, title }) => (
  <Wrapper>
    <div>
      <Image src={imgSrc} />
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </div>
  </Wrapper>
);

export { BlogPostPreview };
