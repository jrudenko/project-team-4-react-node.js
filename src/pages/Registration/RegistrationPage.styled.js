import styled from 'styled-components';
import regBgMobile from '../../images/mobile/form-auth-mob-min.png';
import regBgTablet from '../../images/tablet/form-auth-tab-min.png';
import regBgDesktop from '../../images/desktop/form-auth-des.png';
import regImage from '../../images/mobile/auth-pana-mob-min.png';
import regImageRetina from '../../images/mobile/auth-pana-mob-ret-min.png';
import regImageTablet from '../../images/tablet/auth-pana-tab-min.png';
import regImageTabletRetina from '../../images/tablet/auth-pana-tab-min-ret.png';
import regImageDesktop from '../../images/desktop/auth-pana-des.png';
// import regImageDesktopRetina from '../../images/desktop/auth-pana-des-ret.png';

import { ToastContainer } from 'react-toastify';

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
  }
`;

// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
// import btn_mob from '../../images/bottom-mobile.webp';
// import btn_tabl from '../../images/bottom-tablet.webp';
// import btn_deck from '../../images/bottom-desktop.webp';
// import OrderPana from '../../images/SVG/Order-food-pana.svg';

// export const Page = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;
//   /* height: 100vh; */
//   /* position: relative; */
//   /* width: 375px; */
//   height: 812px;
//   background: #fafafa;
//   @media (min-width: 768px) {
//     height: 1024px;
//   }
//   @media (min-width: 1440px) {
//     height: 770px;
//   }
// `;

// export const Container = styled.div`
//   position: absolute;
//   left: 20px;
//   top: 87px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 768px) {
//     top: 70px;
//     left: 134px;
//   }
//   @media (min-width: 1440px) {
//     flex-direction: row;
//     top: 150px;
//   }
// `;

// export const Box = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const BackgroundImg = styled.div`
//   background-image: url(${btn_mob});
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100vw;
//   height: 507px;
//   /* left: 0px;
//   top: 322px; */
//   @media (min-width: 768px) {
//     background-image: url(${btn_tabl});
//     height: 606px;
//   }
//   @media (min-width: 1440px) {
//     background-image: url(${btn_deck});
//     height: 325px;
//   }
// `;

// export const Image = styled.div`
//   background-image: url(${OrderPana});
//   background-size: cover;
//   /* height: 209px;
//   width: 255px; */
//   /* position: absolute; */

//   width: 285px;
//   height: 250px;
//   left: 45px;
//   top: 87px;

//   @media (min-width: 768px) {
//     background-image: url(${OrderPana});
//     width: 409px;
//     height: 359px;
//   }
//   @media (min-width: 1440px) {
//     background-image: url(${OrderPana});
//     width: 532px;
//     height: 468px;
//     margin-right: 8vw;
//   }
// `;

// export const LinkTo = styled(NavLink)`
//   /* display: block;
//   color: white;
//   text-align: center;
//   font-size: 14px;
//   line-height: 1.5;
//   text-decoration-line: underline;
//   @media (min-width: 768px) {
//     font-size: 16px;
//   }
//   @media (min-width: 1440px) {
//     position: absolute;
//     width: 53px;
//     height: 23px;
//     left: 987px;
//     top: 624px;
//     font-size: 16px;
//     line-height: 24px;
//   } */
// `;
