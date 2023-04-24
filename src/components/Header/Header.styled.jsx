import styled from 'styled-components';

export const HeaderContainer = styled.header`
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


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;

export const UserToglContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 24px;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }

`;