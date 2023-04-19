import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ToggleTheme from 'components/ThemeToggler';
import { HeaderContainer, StyledContainer } from './Header.styled';


const Header = () => {
  return (
    <HeaderContainer>
      <StyledContainer>
          <Logo />
          <Navigation />
          <ToggleTheme />
      </StyledContainer>
    </HeaderContainer>
  );
}

export default Header;

