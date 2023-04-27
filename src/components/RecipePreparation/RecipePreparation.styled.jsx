import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-size: 24px;
  font-weight: ${p => p.theme.fontWeights.title};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.primaryText};
`;

export const Image = styled.img`
  height: 250px;
  width: 343px;
  object-fit: cover;
  border-radius: ${p => p.theme.radius.image};
`;
