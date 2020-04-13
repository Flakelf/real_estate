import styled, { css } from 'styled-components';

const selectedAfter = css`
  :after {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: -8px;
    height: 4px;
    border-radius: 2px;

    background: ${p => p.theme.colors[10]};
  }
`;

export const Tab = styled.div`
  position: relative;
  cursor: pointer;

  color: ${p => p.theme.colors[1]};

  ${p => p.theme.typography.textLine}

  ${p => p.selected && selectedAfter}
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 30px 0 0 0;

  ${Tab}:not(:first-of-type) {
    margin: 0 0 0 40px;
  }
`;
