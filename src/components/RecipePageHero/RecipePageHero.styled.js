import styled from 'styled-components';
import { ButSkewStyle } from 'components/ButtonSkew';
import { ReactComponent as Clock } from '../../images/SVG/clock1.svg';

import mob1 from 'images/flatLayAssortment/flat-lay-assortment-vegetables-mobile.jpg';
import mob2 from 'images/flatLayAssortment/flat-lay-assortment-vegetables-mobile@2x.jpg';
import tab1 from 'images/flatLayAssortment/flat-lay-assortment-vegetables-tablet.jpg';
import tab2 from 'images/flatLayAssortment/flat-lay-assortment-vegetables-tablet@2x.jpg';
import desk1 from 'images/flatLayAssortment/flat-lay-assortment-vegetables-desktop.jpg';
import desk2 from 'images/flatLayAssortment/flat-lay-assortment-vegetables-desktop@2x.jpg';

const highDensity = imageUrl => `
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
      background-image: url(${imageUrl});
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 455px;
  padding-top: 144px;
  padding-bottom: 90px;
  background-image: url(${mob1});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  ${highDensity(`${mob2}`)}
  @media screen and (${p => p.theme.device.tablet}) {
    margin-bottom: 50px;
    padding-top: 136px;
    padding-bottom: 32px;
    width: 100%;
    height: 495px;
    background-image: url(${tab1});
    ${highDensity(`${tab2}`)}
  }
  @media screen and (${p => p.theme.device.desktop}) {
    width: 100%;
    padding-top: 164px;
    height: 493px;
    background-image: url(${desk1});

    ${highDensity(`${desk2}`)}
  }
  ${ButSkewStyle} {
    padding: 10px 18px;
    color: ${p => p.theme.colors.button.secondaryBag};
    border: 2px solid ${p => p.theme.colors.button.hoverSecondaryText};
    margin-bottom: 43px;
    transition: ${p => p.theme.transitions.main};
    @media screen and (${p => p.theme.device.tablet}) {
      font-size: 16px;
      line-height: ${p => p.theme.lineHeights.searchSelect};
      padding: 18px 44px;
      margin-bottom: 55px;
    }
    @media screen and (${p => p.theme.device.desktop}) {
      margin-bottom: 48px;
    }
    &:hover {
      color: ${p => p.theme.colors.button.textColorMain};
      background-color: ${p => p.theme.colors.button.hoverSecondaryText};
    }
  }
`;

export const HeroTitle = styled.title`
  display: block;
  text-align: center;
  margin-bottom: 18px;
  font-family: Poppins, sans-serif;
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.colorAccent};
  max-width: 330px;
  text-overflow: ellipsis;
  @media screen and (${p => p.theme.device.tablet}) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (${p => p.theme.device.desktop}) {
    max-width: 1000px;
  }
`;

export const HeroText = styled.p`
  width: 300px;
  height: 64px;
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.button.secondaryBag};
  text-align: center;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  margin-bottom: 15px;
  overflow-y: clip;
  text-overflow: ellipsis;
  hyphens: auto;
  @media screen and (${p => p.theme.device.tablet}) {
    width: 506px;
    height: 96px;
    font-size: 18px;
    margin-bottom: 24px;
  }
  @media screen and (${p => p.theme.device.desktop}) {
    width: 656px;
    height: 72px;
    -webkit-line-clamp: 3;
    margin-bottom: 30px;
  }
`;

export const StyledClock = styled(Clock)`
  width: 14px;
  height: 14px;
  margin-right: 4px;
  color: ${p => p.theme.colors.mainDark};
  @media screen and (${p => p.theme.device.tablet}) {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

export const WrapperTime = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: ${p => p.theme.colors.mainDark};
  font-weight: ${p => p.theme.fontWeights.subtitle};
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  height: 14px;
  @media screen and (${p => p.theme.device.tablet}) {
    height: 20px;
    font-size: 14px;
  }
`;
