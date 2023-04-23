import { useMediaQuery } from 'react-responsive';
import { ReactComponent as BurgerButtonSvg } from '../../images/SVG/burgerButton.svg';
import { ButtonBurger } from './BurgerButton.styled.jsx';

const BurgerButton = ({ onClick }) => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1439 });
    return (
        <ButtonBurger type="button" onClick={onClick}>
            {isMobile && <BurgerButtonSvg width={28} height={28} />}
            {isTablet && <BurgerButtonSvg />}
        </ButtonBurger>
    );
};

export default BurgerButton;

