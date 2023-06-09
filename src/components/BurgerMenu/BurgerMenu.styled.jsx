import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

import SpinachMob1x from '../../images/spinach-main-bg/spinach-popup-mobile-1x.webp';
import SpinachMob2x from '../../images/spinach-main-bg/spinach-popup-mobile-@2x.webp';
import SpinachTablet1x from '../../images/spinach-main-bg/spinach-popup-tablet-1x.webp';
import SpinachTablet2x from '../../images/spinach-main-bg/spinach-popup-tablet-@2x.webp';

export function CloseBtn({ onClose }) {
  return (
    <CloseButton onClick={onClose}>
      <CloseIcon width={32} height={32}  />
    </CloseButton>
  );
}

export const WrapperBurger = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* width: 100vw;
  height: 100vh; */
  background-color: ${p => p.theme.colors.secondaryBg};
  background-image: url('${SpinachMob1x}');
  background-repeat: no-repeat;
  background-position: right -250px bottom -70px;
  background-size: 550px 360px;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${p => p.theme.colors.formAddScrollThumb};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${p => p.theme.colors.fromAddScrollTrack};
      border-radius: 5px;
    }

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
  top: 22px;
  right: 16px;
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 32px;
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

export const CloseIcon = styled(IoClose)`
position: absolute;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  top: 18px;
  right: 18px;
  margin-left: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
 color: ${p => (p.recipe?.recipeId ? '#23262A' : p.theme.colors.headerText)};
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorAccent};
  }
  
`;