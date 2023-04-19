import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  padding-top: 18px;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
    justify-content: start;
  }
`;
