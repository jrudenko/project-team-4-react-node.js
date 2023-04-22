import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ThemeToggler from 'components/ThemeToggler';
import BurgerButton from 'components/BurgerButtonMenu';
import BurgerMenu from 'components/BurgerMenu';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { HeaderContainer, StyledContainer, Wrapper } from './Header.styled';

const Header = () => {
  const [isBurgerMenuShow, setIsBurgerMenuShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1439});
  const handleMenuOnClose = () => {
    setIsBurgerMenuShow(false);
  };
  const handleBurgerButton = () => {
    setIsBurgerMenuShow(true);
  };

  return (
    <HeaderContainer>
      {isMobile ? (
        <StyledContainer>
          {!isBurgerMenuShow && (
            <>
              <Logo />
              <Wrapper>
                <BurgerButton onClick={handleBurgerButton} />
                </Wrapper>
            </>
          )}
          {isBurgerMenuShow && (
            <BurgerMenu/>
          )}
          </StyledContainer>
      ) : (
          <StyledContainer>
            <Logo mr="187px" />
            <Navigation onClick={handleMenuOnClose} />
            <ThemeToggler />
         </StyledContainer> 
      )}
    </HeaderContainer>
  );
}

export default Header;





