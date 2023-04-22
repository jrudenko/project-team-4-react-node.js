import styled from 'styled-components';

import btn_mob from '../../images/bottom-mobile.webp';
import btn_tabl from '../../images/bottom-tablet.webp';
import btn_deck from '../../images/bottom-desktop.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const BackgroundImg = styled.div`
  background-image: url(${btn_mob});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 507px;
  @media (min-width: 768px) {
    background-image: url(${btn_tabl});
    height: 606px;
  }
  @media (min-width: 1440px) {
    background-image: url(${btn_deck});
    height: 325px;
  }
`;

export const Image = styled.div`
  background-size: cover;
  height: 209px;
  width: 255px;
  @media (min-width: 768px) {
    width: 409px;
    height: 359px;
  }
  @media (min-width: 1440px) {
    width: 532px;
    height: 468px;
    margin-right: 8vw;
  }
`;
