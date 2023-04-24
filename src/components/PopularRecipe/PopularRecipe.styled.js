import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperPoular = styled.div`
  margin-top: 72px;
  margin-right: auto;
  margin-left: auto;
  width: 343px;

  @media screen and  ${p => p.theme.device.tablet} {
    margin-top: 100px;
    width: 704px;
  }

  @media screen and  ${p => p.theme.device.desktop} {
    width: 319px;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 23px;
  flex-direction: column;
  @media screen and ( ${p => p.theme.device.tablet} and (max-width: 1439px)) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
  @media screen and  ${p => p.theme.device.desktop} {
    width: 319px;
  }
`;

export const PopularTitle = styled.h3`
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  margin-bottom: 32px;
  @media screen and (min-width: ${p => p.theme.device.tablet}) {
    margin-bottom: 40px;
  }
`;

export const Item = styled.li`
  border-top-right-radius: 8px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
  transition: ${p => p.theme.transitions.main};
  :nth-child(n+5) {
    display: none;
}
  &:hover {
    border-bottom-color: rgba(112, 112, 112, 1);
    box-shadow: inset 0px -25px 6px -20px rgba(0,0,0,0.1);

  }
  @media screen and  ${p => p.theme.device.tabletMax} {
    width: 343px;
  }
  @media screen and (${p =>p.theme.device.tablet} and (max-width: 1439px)) {
    
    &:nth-child(n+3) {
      display: none;
  }
  @media screen and  ${p => p.theme.device.desktop} {
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
  @media screen and  ${p => p.theme.device.desktop} {
    width: 97px;
  }
`;

export const TextWrapper = styled.div`
  width: 213px;
  padding-bottom: 20px;

  @media screen and  ${p => p.theme.device.tablet} {
    width: 209px;
  }
  @media screen and  ${p => p.theme.device.desktop} {
    width: 198px;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: ${p => p.theme.fontWeights.subtitle};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.primaryText};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ItemDescription = styled.p`
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${({ theme }) => theme.colors.switches.lightTheme.recipieDescSecondary};
`;
