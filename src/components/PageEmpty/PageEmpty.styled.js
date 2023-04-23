import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EmptyText = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: ${p =>p.theme.fontWeights.subtitle};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  text-align: center;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.black};
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EmptyImgWrapper = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
