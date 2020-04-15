import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  /* height: 100%; */

  padding: 0 0 20px 20px;

  .my-masonry-grid_column {
    background: grey;
    margin-bottom: 30px;
  }

  ${p =>
    `
      background: url(${p.imgSrc});
      background-size: 100% 100%;
  `}
`;

export const Image = styled.img`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 0px;

  border-radius: 15px 15px 0px 0px;
  background: linear-gradient(180deg, rgba(14, 19, 67, 0.55) 0%, rgba(14, 19, 67, 0) 100%);
`;

export const Title = styled.p`
  color: #fff;
  padding: 25px 25px 0 25px;

  ${p => p.theme.typography.textButton};
`;
