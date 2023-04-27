import { useMediaQuery } from 'react-responsive';
import { ButtonBurger, MenuIcon } from './BurgerButton.styled.jsx';
import { useLocation, useParams } from 'react-router-dom';

const BurgerButton = ({ onClick }) => {
    const { pathname } = useLocation();
    const recipe = useParams();
    const isMobileOrTablet = useMediaQuery({ maxWidth: 1439 });
    
    return (
        <ButtonBurger type="button" onClick={onClick} >
            {isMobileOrTablet && <MenuIcon pathname={pathname} recipe={recipe} />}
        </ButtonBurger>
    );
};

export default BurgerButton;





