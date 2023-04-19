import styled from 'styled-components';

import mobile1 from '../../../src/images/flatLayAssortment/flat-lay-assortment-vegetables-mobile.jpg'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 455px;
padding-top: 144px;
padding-bottom: 90px;
background-image: url(${mobile1});
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: cover;
`;

export const HeroTitle = styled.title`
  display: block;
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height:${p=>p.theme.lineHeights.subheader} ;
  margin-bottom: 18px;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.colorAccent};
  max-width: 330px;
  `;

  export const HeroText = styled.p`
  font-weight: ${p => p.theme.fontWeights[0]};
  color: ${p=>p.theme.button.secondaryBag};
  text-align: center;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  width: 300px;
  margin-bottom: 15px;
  `;