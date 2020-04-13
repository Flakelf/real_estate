import React from 'react';

import { Wrapper, Image, Title, Description, Footer, By, Author, Date } from './styled';

const NewsPostPreview = ({ title, description, author, date, imgSrc }) => (
  <Wrapper>
    <Image src={imgSrc} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Footer>
      <By>
        by <Author>{author}</Author>
      </By>
      <Date>{date}</Date>
    </Footer>
  </Wrapper>
);

export { NewsPostPreview };
