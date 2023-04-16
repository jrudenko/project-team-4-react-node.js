import styled from 'styled-components';
import bg from '../../images/welcomeSection/welcomSection.png';
import bg_tablet from '../../images/welcomeSection/tablet_welcomSection.jpg';
import bg_mobile from '../../images/welcomeSection/mobile_welcomSection.jpg';

export const Wrapper = styled.div`
  background-image: url(${bg_mobile});
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100vh;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${bg_tablet});

    @media screen and (min-width: 1200px) {
      background-image: url(${bg});
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 54px;
  height: 54px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

export const Title = styled.div`
  margin-top: 28px;
  font-size: 24px;
  line-height: 24px;
  font-style: normal;
  font-weight: 600;

  /* identical to box height, or 100% */
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  @media screen and (min-width: 768px) {
    margin-top: 44px;
    font-size: 28px;
    line-height: 28px;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 18px;
  width: 305px;
  font-style: normal;
  font-weight: 400;

  /* or 129% */
  text-align: center;
  letter-spacing: -0.02em;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    width: 540px;
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
  gap: 12px;
  @media screen and (max-width: 768px) {
    margin-top: 44px;
    gap: 12px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 40px;
    gap: 18px;
  }
`;

// export const ButtonWelcomSection = styled.div`
//   /* button {
//   } */
// `;
