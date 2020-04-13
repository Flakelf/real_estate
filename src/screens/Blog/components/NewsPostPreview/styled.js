import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 297px;
`;

export const Image = styled.img`
  border-radius: 15px;
`;

export const Title = styled.p`
  margin: 20px 0 0 0;

  color: ${p => p.theme.colors[1]};

  ${p => p.theme.typography.textButton};
`;

export const Description = styled.p`
  margin: 10px 0 0 0;

  color: ${p => p.theme.colors[1]};

  ${p => p.theme.typography.description}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 0 0;
`;

export const By = styled.div`
  display: flex;
  color: ${p => p.theme.colors.grey};

  ${p => p.theme.typography.description};
`;

export const Author = styled.p`
  color: ${p => p.theme.colors[2]};
`;

export const Date = styled.p`
  color: ${p => p.theme.colors.grey};

  ${p => p.theme.typography.description}
`;
