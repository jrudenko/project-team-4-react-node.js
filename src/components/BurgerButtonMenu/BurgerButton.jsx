import { useMediaQuery } from 'react-responsive';
import { ButtonBurger, MenuIcon } from './BurgerButton.styled.jsx';

const BurgerButton = ({ onClick }) => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768 });
    return (
        <ButtonBurger type="button" onClick={onClick} >
            {isMobile && <MenuIcon width={28} height={28} />}
            {isTablet && <MenuIcon />}
        </ButtonBurger>
    );
};

export default BurgerButton;




