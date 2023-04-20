import styled from 'styled-components';

export const MainConteiner = styled.div`
  padding: 0 16px 100px;
  background-color: ${p => p.theme.colors.backgroundMain};
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;
