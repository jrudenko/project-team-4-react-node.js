import Logo from '../Logo';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';
import { WrapperBurger, CloseBtn, LogoWrapper, ThemeTogglerWrapper } from './BurgerMenu.styled';


const BurgerMenu = ({ onClose }) => {
  return (
    <WrapperBurger>
      <LogoWrapper>
        <Logo mr="0px" />
      </LogoWrapper>
      <CloseBtn onClose={onClose} />
      <Navigation mr="0px" fd="column" onClick={onClose} />
      <ThemeTogglerWrapper>
        <ThemeToggler />
      </ThemeTogglerWrapper>
    </WrapperBurger>
  );
}

export default BurgerMenu;

