import styled from 'styled-components';

import { Link as _Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 74px 0 0 0;
  height: 117px;

  :before {
    position: absolute;
    content: '';
    top: 0;
    width: 100%;
    border: 1px solid ${p => p.theme.colors.grey};
  }
`;

export const Link = styled(_Link)`
  color: ${p => p.theme.colors.grey};

  ${p => p.theme.typography.textLine}

  :hover {
    color: ${p => p.theme.colors[1]};
  }
`;

export const Links = styled.div`
  margin: 0 0 0 80px;

  ${Link}:not(:first-of-type) {
    margin: 0 0 0 40px;
  }
`;

export const Soc = styled.div`
  svg {
    fill: ${p => p.theme.colors.grey};
    cursor: pointer;
  }

  svg:last-of-type {
    margin: 0 0 0 40px;
  }
`;

export const CopyRight = styled.p`
  margin-left: auto;

  color: ${p => p.theme.colors.grey};

  ${p => p.theme.typography.description}
`;
