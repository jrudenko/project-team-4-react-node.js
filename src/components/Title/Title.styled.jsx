import styled from 'styled-components';

export const TitleConteiner = styled.div`  
  box-sizing: border-box;
  width: 100%;


  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.02em;
    font-feature-settings: 'liga' off;
    color: ${p => p.theme.colors.titleConteiner};
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 1;
    }
    @media screen and (min-width: 1440px) {
      font-size: 44px;
      line-height: 1;
    }
  }

  `