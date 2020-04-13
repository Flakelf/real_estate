import styled from 'styled-components';

export const Control = styled.button`
  padding: 10px 17px;
  border-radius: 8px;

  color: #fff;
  background: ${p => p.theme.colors[2]};

  :hover {
    background: #55b7f3;
  }

  ${p => p.theme.typography.textButton}
`;
