import styled from 'styled-components';

export const InformImage = styled.img`
  display: block;
  width: 259px;
  height: 170px;
  margin: 0 auto 14px;


  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
    margin: 0 auto 32px;
  }

    @media screen and (min-width: 1140px) {
    height: 331px;
   }
`;

export const InformText = styled.p`
  width: 230px;
  margin: 14px auto 0px;
  text-align: center;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.notFoundPageText};
  & span {
    margin-top: 8px;
    display: block;
    font-weight: 400;
    opacity: 0.5;
    line-height: 1.29;
  }
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: ${p => p.theme.fontSizes.xl}px;
    width: 430px;
    & span {
      margin-top: 14px;
      font-size: ${p => p.theme.fontSizes.m}px;
    }
  }
`;
