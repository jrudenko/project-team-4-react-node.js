import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrapper = styled.section`
  padding-top: 42px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 90px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
  }
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

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 268px;
  }
`;

export const Label = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.primaryText};
`;
