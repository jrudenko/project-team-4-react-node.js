import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrapper = styled.section`
  padding-top: 42px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 28px;
`;

export const Thumb = styled.div`
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.white};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const TextBox = styled.div`
  position: absolute;
  bottom: 26px;
  right: 18px;
  padding-left: 16px;
  height: 52px;
  width: 307px;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  border-radius: 8px;
`;

export const Label = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.primaryText};
`;
