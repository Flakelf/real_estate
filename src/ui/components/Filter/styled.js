import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  svg {
    fill: ${p => p.theme.colors.grey};
    position: absolute;
    right: 0;
    height: 100%;
  }

  :active {
    svg {
      fill: ${p => p.theme.colors.grey};
    }
  }
`;

export const Control = styled.input`
  padding: 9px 12px;
  outline: none;
  box-shadow: none;
  background: #fff;
  border-radius: 10px;

  border: 1px solid ${p => p.theme.colors.grey};

  :hover {
    border: 1px solid ${p => p.theme.colors[8]};
  }

  color: ${p => p.theme.colors.grey};

  ${p => p.theme.typography.textLineSmall};
`;
