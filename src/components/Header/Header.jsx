import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ThemeToggle from 'components/ThemeToggler';
import { HeaderContainer, StyledContainer } from './Header.styled';


const Header = () => {
  return (
    <HeaderContainer>
      <StyledContainer>
          <Logo />
          <Navigation />
          <ThemeToggle />
      </StyledContainer>
    </HeaderContainer>
  );
}

export default Header;

