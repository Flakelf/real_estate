import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${p => p.theme.colors[2]};
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 18px;

  margin: 0 15px 0 0;
`;

export const Name = styled.p`
  color: ${p => p.theme.colors[2]};

  ${p => p.theme.typography.textLine}
`;
