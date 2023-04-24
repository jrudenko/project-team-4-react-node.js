import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const NavLinkSkewStyled = styled(NavLink)`
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  font-weight: ${p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 10px;
  color: ${p =>
    p.styled === 'black'
      ? p.theme.colors.btnTextLight
      : p.styled === 'olive'
      ? p.theme.colors.btnTextLight
      : p.styled === 'other'
      ? p.theme.colors.btnTextLight
      : p.styled === 'transparent'
      ? p.theme.colors.btnTextLight
      : 'red'};
  padding: ${p =>
    p.location === 'favorite' || p.location === 'recipes'
      ? '6px 14px'
      : '16px 30px'};
  background-color: ${p =>
    p.styled === 'black'
      ? p.theme.colors.hoverTextColorMain
      : p.styled === 'olive'
      ? p.theme.colors.mainAccent
      : p.styled === 'transparent'
      ? 'transparent'
      : p.styled === 'other'
      ? 'transparent'
      : 'red'};
  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  min-width: 85px;
  text-align: center;
  border: ${p =>
    p.styled === 'other'
      ? `1px solid ${p.theme.colors.hoverSecondaryText}`
      : p.styled === 'transparent'
      ? `1px solid ${p.theme.colors.btnTextLight}`
      : '1px solid transparent'};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:hover {
    color: ${p =>
      p.styled === 'black'
        ? p.theme.colors.btnTextLight
        : p.styled === 'olive'
        ? p.theme.colors.btnTextLight
        : p.styled === 'other'
        ? p.theme.colors.btnTextLight
        : p.styled === 'transparent'
        ? p.theme.colors.hoverSecondaryText
        : 'red'};
    background-color: ${p =>
      p.styled === 'black'
        ? p.theme.colors.hoverSecondaryText
        : p.styled === 'olive'
        ? p.theme.colors.hoverTextColorMain
        : p.styled === 'transparent'
        ? 'transparent'
        : p.styled === 'other'
        ? p.theme.colors.colorAccent
        : 'red'};
    border: ${p =>
      p.styled === 'transparent'
        ? `1px solid ${p.theme.colors.hoverSecondaryText}`
        : '1px solid transparent'};
  }
  @media screen and (min-width: 768px) {
    min-width: 130px;
    font-size: 14px;
    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '12px 32px'
        : '16px 40px'};
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '18px 44px'
        : '20px 40px'};
    min-width: 160px;
  }
`;
