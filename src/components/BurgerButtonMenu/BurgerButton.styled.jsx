import styled from 'styled-components';
import { HiMenuAlt2 } from 'react-icons/hi';

export const ButtonBurger = styled.button`
   
`;

export const MenuIcon = styled(HiMenuAlt2)`
  width: 28px;
  height: 28px;
  color: ${p => (p.recipe?.recipeId ? '#23262A' : p.theme.colors.headerText)};
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorAccent};
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    color: ${p =>
      p.pathname === '/main' || p.recipe?.recipeId
        ? '#23262A'
        : p.theme.colors.headerText};
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;