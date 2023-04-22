import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperPoular = styled.div`
  margin-top: 72px;
  margin-right: auto;
  margin-left: auto;
  width: 343px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 100px;
    width: 704px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 319px;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 23px;
  flex-direction: column;
  @media screen and (min-width: ${p =>
      p.theme.breakpoints[1]}) and (max-width: calc(${p =>
      p.theme.breakpoints[2]} - 0.5px)) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 319px;
  }
`;

export const PopularTitle = styled.h3`
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.sectionHeader};
  margin-bottom: 32px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 40px;
  }
`;

export const Item = styled.li`
  border-top-right-radius: 8px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
  transition: ${p => p.theme.transitions.main};
  &:hover {
    border-bottom-color: rgba(112, 112, 112, 1);
    box-shadow: inset 0px -25px 6px -20px rgba(0,0,0,0.1);

  }
  @media screen and (max-width: ${p => p.theme.breakpoints[1]}) {
    width: 343px;
  }
  @media screen and (min-width: ${p =>
    p.theme.breakpoints[1]}) and (max-width: calc(${p =>
  p.theme.breakpoints[2]} - 1px)) {
    &:nth-last-child(-n + 2) {
      display: none;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  height: 98px;
`;

export const ImgWrapper = styled.div`
  width: 104px;
  height: 85px;
  margin-right: 12px;
  border-radius: 8px;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 97px;
  }
`;

export const TextWrapper = styled.div`
  width: 213px;
  padding-bottom: 20px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 209px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 198px;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.primaryText};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ItemDescription = styled.p`
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
