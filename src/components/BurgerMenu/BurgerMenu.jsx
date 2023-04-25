import Logo from '../Logo';
import Navigation from '../Navigation';
import ThemeToggler from '../ThemeToggler';
import { WrapperBurger, CloseBtn, LogoWrapper, ThemeTogglerWrapper, } from './BurgerMenu.styled';
import { useSelector } from 'react-redux';

const BurgerMenu = ({ onClose }) => {
  const darkMode = useSelector(state => state.theme);
  return (
    <WrapperBurger>
      <LogoWrapper>
         
        <Logo mr="0px" />
      </LogoWrapper>
      <CloseBtn onClose={onClose} dark={darkMode.darkMode}/>
      <Navigation mr="0px" fd="column" onClick={onClose} />
      <ThemeTogglerWrapper>
       <ThemeToggler />
      </ThemeTogglerWrapper>
    </WrapperBurger>
  );
}

export default BurgerMenu;
