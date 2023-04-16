import {
  Wrapper,
  Title,
  Content,
  WrapperBtn,
  LogoWrapper,
} from './WelcomSection.styled';
import React from 'react';
import ReplaceableButton from 'components/ButtonMain/ButtonMain';
import logosvg from '../../images/SVG/Logo/WelcomeSectionLogo.svg';

function MyComponent() {
  function handleButtonClick() {
    console.log('Button clicked!');
  }

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
        <ReplaceableButton onClick={handleButtonClick} label="Registration" />
        <ReplaceableButton onClick={handleButtonClick} label="Sign In" />
      </WrapperBtn>
    </Wrapper>
  );
}

export default MyComponent;
