import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 375px;
  margin: 0 auto;
`;

export const StyledContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  padding-top: ${p => p.theme.space[4] + 2}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: ${p => p.theme.space[2] * 25}px;
    padding-right: ${p => p.theme.space[2] * 25}px;
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
  align-items: center;
`;