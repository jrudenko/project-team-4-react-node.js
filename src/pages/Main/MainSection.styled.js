import MobileBackground1x from '../../images/mobile/mainpage1x_mob.png';
import TabletBackground1x from '../../images/tablet/mainpage1x_tab.png';
import DesktopBackground1x from '../../images/desktop/mainpage1x_desk.png';
import MobileBackground2x from '../../images/mobile/mainpage2x_mob.png';
import TabletBackground2x from '../../images/tablet/mainpage2x_tab.png';
import DesktopBackground2x from '../../images/desktop/mainpage2x_desk.png';

import styled from 'styled-components';

export const MainPageContainerStyled = styled.div`
  @media ${props => props.theme.device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${p => -p.theme.space[5]}px;
    margin-right: ${p => -p.theme.space[5]}px;
  }
  @media ${props => props.theme.device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -100px;
    margin-right: -100px;
  }
`;

const MainPageStyled = styled.div`
  background: url(${MobileBackground1x});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: none;
  background-position-y: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;

  margin-top: ${p => -(p.theme.space[4] * 3)}px;
  margin-left: ${p => -p.theme.space[4]}px;
  margin-right: ${p => -p.theme.space[4]}px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${MobileBackground2x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: none;
    background-position-y: 100%;
  }

  @media ${props => props.theme.device.tablet} {
    background: url(${TabletBackground1x});
    background-repeat: no-repeat;
    background-position-y: 0%;
    box-sizing: border-box;
    align-items: flex-start;
    padding-bottom: 125px;
    margin-bottom: 0px;
    margin-top: -148px;
    background-size: cover;
    margin-left: ${p => -p.theme.space[5]}px;
    margin-right: ${p => -p.theme.space[5]}px;

    & > div:first-of-type {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${TabletBackground2x});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  @media ${props => props.theme.device.desktop} {
    background: url(${DesktopBackground1x});
    background-position-y: 0%;
    background-size: cover;
    background-repeat: no-repeat;

    padding-bottom: 210px;
    margin-top: -164px;
    padding-bottom: 100px;
    margin-bottom: 110px;
    margin-left: -100px;
    margin-right: -100px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${DesktopBackground2x});
      background-position-y: 0%;
      background-size: cover;
    }
  }

  & > h1 {
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.005em;
    color: ${p => p.theme.colors.heroText};

    /* color: #22252a; */
    margin-bottom: 14px;
    padding-top: 69px;
    & span {
      color: #8baa36;
    }
    @media ${props => props.theme.device.tablet} {
      padding-top: 205px;
      font-size: 72px;
      line-height: 72px;
      margin-left: 33px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 100px;
      line-height: 100px;
      padding-bottom: 0px;
      padding-top: 230px;
      margin-left: 100px;
      margin-bottom: 10px;
    }
  }

  & > p {
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.02em;
    /* color: #23262a; */
    color: ${p => p.theme.colors.headerText};
    width: 248px;
    margin-bottom: 157px;
    @media ${props => props.theme.device.tablet} {
      width: 362px;
      text-align: left;
      margin-top: 10px;
      margin-left: 38px;
      margin-bottom: 30px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 18px;
      line-height: 24px;
      padding-top: 160px;
      margin-left: 100px;
      width: 465px;
      margin-top: 0px;
      padding-top: 0px;
      margin-left: 107px;
    }
  }
`;

export default MainPageStyled;
