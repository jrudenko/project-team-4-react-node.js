import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperPoular = styled.div`
  margin-top: 72px;

  @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) {
    margin-top: 100px;
  }

  @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
    width: 319px;
  }
`;

export const List = styled.ul`
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
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
  @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) {
    margin-bottom: 40px;
  }
`;

export const Item = styled.li`
  border-radius: 8px;
  &:hover {
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 24px 0px #000000,
      -9px -6px 27px -2px rgba(35, 196, 49, 0.339);
    box-shadow: 5px 5px 5px 0px rgba(155, 191, 56, 0.253),
      inset 4px 4px 24px 0px rgba(139, 170, 54, 0.678),
      -9px -6px 27px -2px rgba(139, 170, 54, 0.018);
  }
  @media screen and (max-width: ${p=>p.theme.breakpoints[1]}) {
    width: 343px;
  }
  @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) and (max-width: 1439px) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }
  @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  height: 98px;
  gap: 12px;
`;

export const ImgWrapper = styled.div`
  width: 104px;
  height: 85px;
  border-radius: 8px;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
    width: 97px;
  }
`;

export const TextWrapper = styled.div`
  width: 213px;
  padding-bottom: 20px;

  @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) {
    width: 209px;
  }
  @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
    width: 198px;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${p=>p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.primaryText};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ItemDescription = styled.p`
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 12px;
  line-height: ${p=>p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${({ theme }) => theme.colors.darkGrey};
`;