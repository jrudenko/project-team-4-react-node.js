import {
  Wrapper,
  Title,
  Content,
  WrapperBtn,
  LogoWrapper,
} from './WelcomSection.styled';
import React from 'react';
// import ReplaceableButton from 'components/ButtonMain/ButtonMain';
import Button from 'components/Button/Button';
import logosvg from '../../images/SVG/Logo/WelcomeSectionLogo.svg';

function MyComponent() {
  // function handleButtonClick() {
  //   console.log('Button clicked!');
  // }

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logosvg} alt="My SVG" />
      </LogoWrapper>
      <Title>Welcome to the app!</Title>
      <Content>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Content>
      <WrapperBtn>
        {/* <ReplaceableButton onClick={handleButtonClick} label="Registration" />
        <ReplaceableButton onClick={handleButtonClick} label="Sign In" /> */}
        <Button
              look="rounded_dark"
              to="/register"
              fontSize="14px"
              fontSizeTablet="16px"
              width="132px"
              heigth="45px"
              widthTablet="184px"
              heigthTablet="67px"
            >
              Registration
            </Button>
            <Button
              look="rounded_transparent"
              to="/signin"
              fontSize="14px"
              fontSizeTablet="16px"
              width="95px"
              heigth="45px"
              widthTablet="184px"
              heigthTablet="67px"
            >
              Sign In
            </Button>
      </WrapperBtn>
    </Wrapper>
  );
}

export default MyComponent;
