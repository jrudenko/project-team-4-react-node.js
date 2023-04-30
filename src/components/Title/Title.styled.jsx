import styled from 'styled-components';

import sq_black_6 from '../../images/Title/sq_black_6.png';
import sq_black_12 from '../../images/Title/sq_black_12.png';
import sq_green_8 from '../../images/Title/sq_green_8.png';
import sq_green_14 from '../../images/Title/sq_green_14.png';
import white_circle from '../../images/Title/white-circle.png';
import white_rect from '../../images/Title/white-rectangle.png';

export const TitleConteiner = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 50px;
  padding-top: 50px;
  background-repeat: no-repeat;
  background-image: url(${sq_green_8}),
    ${p => (p.dark ? `url(${white_circle})` : `url(${sq_black_6})`)},
    url(${sq_green_8});
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: top 80px left 104px, top 145px left 231px,
    top 112px left 329px;
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
    padding-top: 72px;
    background-image: url(${sq_green_14}),
      ${p => (p.dark ? `url(${white_rect})` : `url(${sq_black_12})`)},
      url(${sq_green_14});
    background-repeat: no-repeat;
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: top 91px left 187px, top 160px left 405px,
      top 104px left 682px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${sq_green_14}),
      ${p => (p.dark ? `url(${white_rect})` : `url(${sq_black_12})`)},
      url(${sq_green_14});
    padding-bottom: 50px;
    padding-top: 104px;
    background-position: top 122px left 228px, top 205px left 707px,
      top 135px left 1150px;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.02em;
    font-feature-settings: 'liga' off;
    color: ${p => p.theme.colors.sectionTitle};

    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 1;
    }
    @media screen and (min-width: 1440px) {
      font-size: 44px;
      line-height: 1;
    }
  }
`;
