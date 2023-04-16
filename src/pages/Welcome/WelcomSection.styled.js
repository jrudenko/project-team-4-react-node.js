import styled from 'styled-components';
import bg from '../../assets/images/WelcomeSection/welcomSection.png';
import bg_tablet from '../../assets/images/WelcomeSection/tablet_welcomSection.jpg';
import bg_mobile from '../../assets/images/WelcomeSection/mobile_welcomSection.jpg';

export const Wrapper = styled.div`
  @media screen and (max-width: 480px) {
    background-image: url(${bg_mobile});
  }
  @media screen and (max-width: 768px) {
    background-image: url(${bg_tablet});
  }

  background-image: url(${bg});
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100vh;
  background-size: cover;
`;

export const LogoWrapper = styled.div`
  @media screen and (max-width: 480px) {
    width: 54px;
    height: 54px;
  }

  width: 68px;
  height: 68px;
`;

export const Title = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 28px;
    font-size: 24px;
    line-height: 24px;
  }

  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  /* identical to box height, or 100% */
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-top: 44px;
`;

export const Content = styled.div`
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    width: 305px;
  }
  width: 540px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 129% */
  text-align: center;
  letter-spacing: -0.02em;

  margin-top: 14px;
`;

export const WrapperBtn = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 44px;
    gap: 12px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 44px;
    gap: 12px;
  }
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 18px;
`;

// export const ButtonWelcomSection = styled.div`
//   /* button {
//   } */
// `;
