import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: #bdbdbd;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;

  &:hover {
    color: #8baa36;
    border-bottom: 2px solid #8baa36;
  }
`;
