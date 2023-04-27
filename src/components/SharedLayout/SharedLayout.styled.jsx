import styled from 'styled-components';

import MobileBackgroundSecond1x from '../../images/mobile/mainpage1x_mob_second.png';
import MobileBackgroundSecond2x from '../../images/mobile/mainpage2x_mob_second.png';
import TabletBackgroundSecond1x from '../../images/tablet/mainpage1x_tab_second.png';
import TabletBackgroundSecond2x from '../../images/tablet/mainpage2x_tab_second.png';
import DesktopBackgroundSecond1x from '../../images/desktop/mainpage1x_des_second.png';
import DesktopBackgroundSecond2x from '../../images/desktop/mainpage2x_des_second.png';

export const Wrapper = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

export const LayoutContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: 54px;
  padding-bottom: 100px;
  background-color: ${p => p.theme.colors.background};
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding-top: 86px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1600px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 104px;
    background-color: ${p => p.theme.colors.background};
  }
`;

export const LeafBackground = styled.div`
  position: absolute;
  bottom: -190px;
  left: 0;
  width: 256px;
  height: 392px;
  background-image: url(${MobileBackgroundSecond1x});
  background-size: cover;
  pointer-events: none;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${MobileBackgroundSecond2x});
  }
  @media screen and (min-width: 768px) {
    bottom: -280px;
    width: 423px;
    height: 646px;
    background-image: url(${TabletBackgroundSecond1x});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${TabletBackgroundSecond2x});
    }
  }
  @media screen and (min-width: 1440px) {
    bottom: -400px;
    width: 558px;
    height: 852px;
    background-image: url(${DesktopBackgroundSecond1x});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${DesktopBackgroundSecond2x});
    }
  }
`;
