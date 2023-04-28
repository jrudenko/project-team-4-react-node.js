import styled from 'styled-components';

import photo from '../../images/icons/photo-icon.svg';

export const CardItem = styled.li`
  list-style-type: none;
  display: flex;
  width: auto;
  height: 152px;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  margin-bottom: 18px;
  padding: 14px 9px;
   box-shadow: ${props => props.theme.colors.boxShadow.boxshadow};
  :last-child {
    margin-bottom: 0;
  }
    &:hover {
    transition: 1s;
    transform: scale(1.1);
  }
    &:focus {
    transition: 1s;
    transform: scale(1.1);
  }
  @media ${props => props.theme.device.tablet} {
    height: 288px;
    margin-bottom: 40px;
    padding: 28px 24px;
    background-color: ${props => props.theme.colors.cardBackground};
  }
  @media ${props => props.theme.device.desktop} {
    height: 404px;
    margin-bottom: 50px;
    padding: 40px 40px;
    background-color: ${props => props.theme.colors.cardBackground};
  }
`;

export const ImgBox = styled.div`
  display: block;
  height: 100%;
  min-width: 152px;
  background-color: ${props => props.theme.colors.whiteMuted};
  background-image: url('${photo}');
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  overflow: hidden;
  @media ${props => props.theme.device.tablet} {
    display: block;
    min-width: 288px;
  }
  @media ${props => props.theme.device.desktop} {
    min-width: 404px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 14px;
  @media ${props => props.theme.device.tablet} {
    padding-left: 24px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-left: 54px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.primaryText};
  padding-right: 24px;
  margin-bottom: 14px;
  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
    line-height: 24px;
    padding-right: 38px;
    margin-bottom: 28px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-right: 44px;
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.heroText};
  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
    line-height: 129%;
    color: ${p => p.theme.colors.heroText};
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 18px;
    line-height: 133%;
    color: ${p => p.theme.colors.heroText};
  }
`;

export const Time = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.primaryText};
  @media ${props => props.theme.device.tablet} {
    left: 24px;
    font-size: 14px;
    line-height: 143%;
  }
  @media ${props => props.theme.device.desktop} {
    left: 54px;
  }
`;
export const ButtonDelete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  background-color: ${props => props.theme.colors.whiteMuted};
  :hover,
  :focus {
    scale: 1.1;
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

