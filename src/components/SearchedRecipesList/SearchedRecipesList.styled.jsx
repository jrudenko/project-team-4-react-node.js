import styled from 'styled-components';

export const NoSearchText = styled.p`
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: Poppins, sans-serif;
  font-weight: ${p => p.theme.fontWeights.subtitle};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  text-align: center;
  color: ${p => p.theme.colors.notFoundPageText};
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding-bottom: 200px;
  }
`;
