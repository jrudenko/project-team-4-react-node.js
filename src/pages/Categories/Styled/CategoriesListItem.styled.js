import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: #bdbdbd;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
  }

  &.active {
    color: #8baa36;
    border-bottom: 2px solid #8baa36;
  }

  &:hover {
    color: #8baa36;
    border-bottom: 2px solid #8baa36;
  }
`;
