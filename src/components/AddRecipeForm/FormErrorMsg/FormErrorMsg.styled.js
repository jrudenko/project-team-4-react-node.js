import styled from 'styled-components';

export const ErrorText = styled.p`
  padding: 5px 0;
  font-size: ${p => `${p.theme.fontSizes.s}px`};
  text-align: ${p => (p.position === 'left' ? 'left' : 'center')};
  white-space: nowrap;
  color: ${p => p.theme.colors.form.inputError};

  @media ${props => props.theme.device.desktop} {
    font-size: ${p => `${p.theme.fontSizes.sm}px`};
  }
`;
