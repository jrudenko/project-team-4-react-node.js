import styled from 'styled-components';

//стилі контейнера Footer
export const FooterConteiner = styled.div`
  background-color: ${p => p.theme.colors.switches.lightTheme.footerBg};
  position: absolute;
  width: 100%;
  height: 435px;
  left: 0px;
  width: 100%;
  padding: 85px, 18px, 85px, 28px;
  margin-bottom: 66px;
  @media (min-width: 768px) {
    padding: 32px, 50px, 94px, 24px;
    height: 423px;
    margin-bottom: 78px;
  }
  @media (min-width: 1440px) {
    /* width: 1440px; */
    padding-left: 100px, 64px, 100px, 50px;
    height: 414px;
    margin-bottom: 78px;
  }
`;

//стилі компонента-Лого+Заголовок
export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 143px;
  height: 32px;
  left: 116px;
  top: 28px;
  @media (min-width: 768px) {
    gap: 12px;
    width: 215px;
    height: 44px;
    left: 32px;
    top: 50px;
  }
  @media (min-width: 1440px) {
    left: 100px;
    top: 64px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 14px 24px; */

  width: 32px;
  height: 32px;

  background: #ebf3d4;
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
`;

export const FooterTitle = styled.div`
  color: ${p => p.theme.colors.white};
  width: 102px;
  height: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
    width: 159px;
    height: 28px;
  }
`;

//стилі компонента- Переваги
export const BenefitsList = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    position: absolute;
    /* width: 380px; */
    height: 102px;
    left: 32px;
    top: 118px;
  }
  @media (min-width: 1440px) {
    gap: 12px;
    width: 418px;
    height: 156px;
    left: 100px;
    top: 148px;
  }
`;

export const Benefits = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0, 02em;
  color: ${p => p.theme.colors.white};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const BenefitsText = styled.span`
  @media (min-width: 768px) {
    white-space: nowrap;
  }
  @media (min-width: 1440px) {
    display: block;
    text-indent: 12px;
  }
`;

//стилі компонента- меню(футер)
export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 14px;

  position: absolute;
  width: 89px;
  left: 143px;
  top: 92px;
  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 20px;
    height: 170px;
    left: 585px;
    top: 50px;
  }
  @media (min-width: 1440px) {
    gap: 24px;
    height: 186px;
    left: 677px;
    top: 64px;
  }
`;

export const Item = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${p => p.theme.colors.white};
  letter-spacing: -0.02em;
`;

export const Link = styled.div``;
