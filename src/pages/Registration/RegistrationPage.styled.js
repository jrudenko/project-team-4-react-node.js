import styled from 'styled-components';
import regBgMobile from '../../images/mobile/form-auth-mob-min.png';
import regBgTablet from '../../images/tablet/form-auth-tab-min.png';
import regBgDesktop from '../../images/desktop/form-auth-des.png';
import regImage from '../../images/mobile/auth-pana-mob-min.png';
import regImageRetina from '../../images/mobile/auth-pana-mob-ret-min.png';
import regImageTablet from '../../images/tablet/auth-pana-tab-min.png';
import regImageTabletRetina from '../../images/tablet/auth-pana-tab-min-ret.png';
import regImageDesktop from '../../images/desktop/auth-pana-des.png';

import { ToastContainer } from 'react-toastify';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --toastify-icon-color-success: #8BAA36;
    --toastify-color-success: #8BAA36;
  }
`;

export const AuthMain = styled.main`
  position: relative;
  height: 100vh;
  padding-top: 87px;
  @media screen and (min-width: 768px) {
    padding-top: 96px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 122px;
    padding-bottom: 122px;
  }
`;

export const AuthImage = styled.div`
  width: 285px;
  height: 250px;
  margin: 0 auto;
  background-image: url(${regImage});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${regImageRetina});
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
    background-image: url(${regImageTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${regImageTabletRetina});
      background-size: cover;
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 113px;
    top: 45%;
    width: 532px;
    height: 468px;
    background-image: url(${regImageDesktop});
    transform: translateY(-50%);
  }
`;

export const AuthBackground = styled.div`
  width: 100%;
  height: 490px;
  background-image: url(${regBgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 606px;
    background-image: url(${regBgTablet});
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 0;
    z-index: -1;
    height: 325px;
    background-image: url(${regBgDesktop});
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 12px;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .Toastify__toast-theme--dark {
    background: #22252a;
  }
`;
