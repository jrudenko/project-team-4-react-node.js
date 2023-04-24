import styled from 'styled-components';
import { ReactComponent as CloseBtnSvg } from '../../images/SVG/closeBtn.svg';

import SpinachMob1x from '../../images/spinach-main-bg/spinach-popup-mobile-1x.webp';
import SpinachMob2x from '../../images/spinach-main-bg/spinach-popup-mobile-@2x.webp';
import SpinachTablet1x from '../../images/spinach-main-bg/spinach-popup-tablet-1x.webp';
import SpinachTablet2x from '../../images/spinach-main-bg/spinach-popup-tablet-@2x.webp';

export function CloseBtn({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <CloseBtnSvg width={32} height={32}  />
    </CloseButton>
  );
}

export const WrapperBurger = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 18px 16px;
  background-color: ${p => p.theme.colors.secondaryBg};
  background-image: url('${SpinachMob1x}');
  background-repeat: no-repeat;
  background-position: right -250px bottom -70px;
  background-size: 550px 360px;
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${SpinachMob2x}');
  }
  @media screen and (min-width: 768px) {
    padding: 18px 32px;
    background-image: url('${SpinachTablet1x}');
    background-position: right -380px bottom -310px;
    background-size: 940px 700px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${SpinachTablet2x}');
    }
  }
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  background-color: transparent;

  line-height: normal;
  text-align: inherit;
  text-decoration: none;
  cursor: pointer;
  top: 22px;
  right: 16px;
  color: ${p => p.theme.colors.heroText};

 
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 32px;
  }
   transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 16px;
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 32px;
  }
`;

export const ThemeTogglerWrapper = styled.div`

  align-items: center;
  position: absolute;
  bottom: 18px;
  left: 16px;
  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;
  }
`;

