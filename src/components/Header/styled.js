import styled from 'styled-components';
import { NavLink as _Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a:not(:first-of-type) {
    margin: 0 0 0 40px;
  }
`;

export const Link = styled(_Link)`
  text-decoration: none;
  text-align: center;
  width: 50px;
  height: 20px;

  color: ${p => p.theme.colors[1]};
  ${p => p.theme.typography.textLine};

  :hover {
    color: #a7aeb8;
  }

  &.selected {
    color: ${p => p.theme.colors[2]};
    position: relative;

    :after {
      content: '';
      display: block;
      position: absolute;
      bottom: -15px;
      width: 100%;
      height: 3px;
      background: ${p => p.theme.colors[2]};
      border-radius: 11px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const LanguageSelect = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0 0;

  svg {
    fill: ${p => p.theme.colors[1]};
  }
`;

export const Language = styled.p`
  color: #2f2c2a;

  ${p => p.theme.typography.textLine};
`;
