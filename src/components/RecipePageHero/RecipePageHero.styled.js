import styled from 'styled-components';
import { ButSkewStyle } from 'components/ButtonSkew';

import mob1 from '../../../src/images/flatLayAssortment/flat-lay-assortment-vegetables-mobile.jpg'



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

${ButSkewStyle} {
    padding: 10px 18px;
    color: ${p=>p.theme.button.secondaryBag};
    border: 2px solid ${p=>p.theme.button.hoverSecondaryText};; 

    @media screen and (min-width: 768px) {
      padding: 18px 44px;
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
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: 24px;
  line-height:${p=>p.theme.lineHeights.subheader} ;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.colorAccent};
  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  `;

  export const HeroText = styled.p`
  width: 300px;
  height: 64px;
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p=>p.theme.button.secondaryBag};
  text-align: center;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  margin-bottom: 15px;
  overflow-y: clip;
  text-overflow: ellipsis;
  hyphens: auto;
  `;