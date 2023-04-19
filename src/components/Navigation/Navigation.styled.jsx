import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  margin-right: ${p => p.mr};
  flex-direction: ${p => p.fd || 'row'};
  column-gap: 30px;
  row-gap: 32px;
  list-style: none;
  @media screen and (min-width: 768px) {
    row-gap: 40px;
  }
`;

export const NavItem = styled.li`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.hoverTextColorMain};
  &.active,
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primaryBag};
  }
  @media screen and (min-width: 1440px) {
    color: '#23262A';
  }
`;

export const SearchIcon = styled(FiSearch)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
`;