import styled from 'styled-components';

export const Ingredients = styled.legend`
  margin-bottom: 24px;
  color: ${p => p.theme.colors.primaryText};
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: ${p => `${p.theme.fontSizes.xl}px`};
  line-height: 1;
  letter-spacing: -0.02em;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 32px;
  }
`;
