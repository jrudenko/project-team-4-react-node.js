import styled from 'styled-components';

export const ButtonBurger = styled.button`

  
  color: ${p => p.theme.colors.headerText};
  transition: ${p => p.theme.transitions.main};
  &.active,
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorAccent};
  }
  @media screen and (min-width: 1440px) {
    color: '#23262A';
  }  
`;

