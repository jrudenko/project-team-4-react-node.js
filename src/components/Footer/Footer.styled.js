import { Link } from 'react-router-dom';
import styled from 'styled-components';

//стилі контейнера Footer
export const FooterConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  background-color: ${p => p.theme.colors.footerBg};
  height: 435px;
  width: 100%;
  /* gap: 40px; */
  @media (min-width: 768px )  {
    height: 423px;
    display: block;
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
  }
  @media (min-width: 1440px) {
    height: 414px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 918px) and (max-width:1439px) {
    padding-top:45px;
  }


    @media (min-width: 1440px) {
    display: flex;
    align-items: stretch;
    margin-bottom: 41px;

  }
`

export const MenuBox = styled.div`
  justify-content:center;
  margin-bottom: 32px;
`;


export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 44px;

  @media (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media (min-width: 918px) {
    flex-direction: column;

  }

  @media (min-width: 1440px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const DescreptionWrapper = styled.div`
  margin-bottom: 32px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 72px;
  }
  @media (min-width: 1440px) {
    gap: 40px;
  }
`;

//стилі компонента-Лого+Заголовок
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
    margin:0;
  }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    width: 32px;
    height: 32px;

@media (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
`;

export const FooterTitle = styled.div`
  color: ${p => p.theme.colors.footerText};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

//стилі компонента- Переваги
export const BenefitsList = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  @media (min-width: 1440px) {
    gap: 12px;
  }
`;

export const Benefits = styled.li`
  color: ${p => p.theme.colors.footerText};
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
export const BenefitsText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0, 02em;
  font-family: 'Poppins';
  font-style: normal;
  padding: 0;
`;

//стилі компонента- меню(футер)
export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 18px;
  }
  @media (min-width: 1440px) {
    gap: 24px;
  }
`;

export const Item = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  color: ${p => p.theme.colors.footerText};
  letter-spacing: -0.02em;
  :hover {
    color: ${p => p.theme.colors.subscribeBgColor};
  }
`;

export const SocialMadia = styled.div`

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
