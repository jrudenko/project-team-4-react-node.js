import { useMediaQuery } from 'react-responsive';
import { ButtonBurger, MenuIcon } from './BurgerButton.styled.jsx';
import { useLocation, useParams } from 'react-router-dom';

const BurgerButton = ({ onClick }) => {
    const { pathname } = useLocation();
  const recipe = useParams();
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768 });
     

    return (
        <ButtonBurger type="button" onClick={onClick} >
            {isMobile && <MenuIcon pathname={pathname} recipe={recipe} />}
            {isTablet && <MenuIcon pathname={pathname} recipe={recipe} />}
        </ButtonBurger>
    );
};

export default BurgerButton;




