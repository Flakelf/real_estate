import styled from 'styled-components';

export const BlogWrapper = styled.div`
  margin: 80px 0 0 0;
`;

export const BlogHeader = styled.p`
  position: relative;

  color: ${p => p.theme.colors[1]};
  ${p => p.theme.typography.title1};

  :before {
    content: '';
    position: absolute;
    top: -18px;
    width: 35px;
    height: 5px;
    border-radius: 10px;
    background: ${p => p.theme.colors[2]};
  }
`;

export const BlogContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 0px;

  div:nth-child(4) {
    grid-area: 1 / 3 / 3 / 4;
  }

  div:nth-child(3) {
    grid-area: 2 / 1 / 3 / 3;
  }

  margin: 51px 0 0 0;
`;

export const NewsWrapper = styled.div`
  margin: 80px 0 0 0;
`;

export const NewsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewsHeader = styled.p`
  color: ${p => p.theme.colors[1]};

  ${p => p.theme.typography.title2};
`;

export const NewsLine = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const NewsContent = styled.div`
  margin: 62px 0 0 0;

  ${NewsLine}:last-of-type {
    margin: 50px 0 0 0;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div:last-of-type {
    margin: 0 0 0 20px;
  }

  svg:first-child {
    fill: ${p => p.theme.colors.grey};
    margin: 0 34px 0 0;
  }
`;
