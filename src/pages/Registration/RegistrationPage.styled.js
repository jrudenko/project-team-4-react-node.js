import styled from 'styled-components';
import regBgMobile from '../../images/mobile/form-auth-mob-min.png';
import regBgTablet from '../../images/tablet/form-auth-tab-min.png';
import regBgDesktop from '../../images/desktop/form-auth-des.png';

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
    // display: flex;
    // justify-content: center;
  }
`;

export const AuthBackground = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
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
    height: 45vh;
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

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 1440px) {
    gap: 115px;
    flex-direction: row;
    justify-content: center;
    bottom: 21vh;
  }
`;
