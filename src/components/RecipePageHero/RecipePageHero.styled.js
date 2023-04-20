import styled from 'styled-components';
import { ButSkewStyle } from 'components/ButtonSkew';

import mob1 from 'images/flatLayAssortment/flat-lay-assortment-vegetables-mobile.jpg';
import  mob2  from 'images/flatLayAssortment/flat-lay-assortment-vegetables-mobile@2x.jpg';
import  tab1  from 'images/flatLayAssortment/flat-lay-assortment-vegetables-tablet.jpg';
import  tab2  from 'images/flatLayAssortment/flat-lay-assortment-vegetables-tablet@2x.jpg';
import  desk1  from 'images/flatLayAssortment/flat-lay-assortment-vegetables-desktop.jpg';
import  desk2  from 'images/flatLayAssortment/flat-lay-assortment-vegetables-desktop@2x.jpg';

const highDensity = (imageUrl) => `
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
      background-image: url(${imageUrl});
  }
`;

export const Wrapper = styled.div`
display: flex;
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

@media screen and (min-width: ${p=>p.theme.breakpoints[1]}) {
  margin-bottom: 50px;
  padding-top: 136px;
  padding-bottom: 32px;
  width: 100%;
  height: 495px;
  background-image: url(${tab1});

  ${highDensity(`${tab2}`)}

}

@media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
  width: 100%;
  padding-top: 164px;
  height: 493px;
  background-image: url(${desk1});
 
  ${highDensity(`${desk2}`)}
}

${ButSkewStyle} {
    padding: 10px 18px;
    color: ${p=>p.theme.button.secondaryBag};
    border: 2px solid ${p=>p.theme.button.hoverSecondaryText};

    @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) {
      font-size: 16px;
      line-height: ${p => p.theme.lineHeights.searchSelect};
      padding: 18px 44px;
      margin-bottom: 55px;
    }

    @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
      margin-bottom: 48px;
    }

    &:hover {
       color: ${p=>p.theme.button.textColorMain};; 
       background-color:${p=>p.theme.button.hoverSecondaryText};
    }
  }
`;

export const HeroTitle = styled.title`
  display: block;
  text-align: center;
  margin-bottom: 18px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height:${p=>p.theme.lineHeights.subheader} ;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.colorAccent};
  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
    max-width: 1000px;
  }
  `;

  export const HeroText = styled.p`
  width: 300px;
  height: 64px;
  font-weight: ${p => p.theme.fontWeights[0]};
  color: ${p=>p.theme.button.secondaryBag};
  text-align: center;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  margin-bottom: 15px;
  overflow-y: clip;
  text-overflow: ellipsis;
  hyphens: auto;

  @media screen and (min-width: ${p=>p.theme.breakpoints[1]}) {
    width: 506px;
    height: 96px;
    font-size: 18px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${p=>p.theme.breakpoints[2]}) {
    width: 656px;
    height: 72px;
    -webkit-line-clamp: 3;
    margin-bottom: 30px;
  }
  `;