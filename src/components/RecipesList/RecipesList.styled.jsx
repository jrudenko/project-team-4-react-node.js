import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Thumb = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 343px;
  height: 323px;
  display: block;
  border-radius: 8px;
`;

export const Label = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  background-color: #fff;
  color: #3e4462;
`;
