import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ThemeToggler from 'components/ThemeToggler';
import BurgerButton from 'components/BurgerButtonMenu';
import BurgerMenu from 'components/BurgerMenu';

import { User } from '../User/User';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { HeaderContainer, StyledContainer, Wrapper, UserToglContainer } from './Header.styled';
import Modal from 'components/modal';


const Header = () => {
  const [isBurgerMenuShow, setIsBurgerMenuShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1439 });
  
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
                <User />
                <BurgerButton onClick={handleBurgerButton} />
              </Wrapper>
            </>
          )}
          {isBurgerMenuShow && (
            <Modal onClose={handleMenuOnClose} isMenu={true}>
              <BurgerMenu onClose={handleMenuOnClose} />
            </Modal>
          )}
        </StyledContainer>

      ) : (
          
        <StyledContainer>
          <Logo />
          <Navigation onClick={handleMenuOnClose} />
          <UserToglContainer>
            <User />
            <ThemeToggler />
          </UserToglContainer>
      
        </StyledContainer>
      )}
    </HeaderContainer>
  );
};


export default Header;





