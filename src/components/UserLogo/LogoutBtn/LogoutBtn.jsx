import  Button  from '../../Button/index';
import {
  Container,
  ButtonClose,
  CloseIcon,
  Title,
  Wrap,
} from './LogoutBtn.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../redux/auth/operations';

const LogoutBtn = ({ onClose }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme);
  return (
    <Container>
      <ButtonClose onClick={onClose} dark={darkMode.darkMode}>
        <CloseIcon />
      </ButtonClose>
      <Title>Are you sure you want to log out?</Title>
      <Wrap>
        <Button
          type="button"
          look="logout"
          width="137px"
          heigth="49px"
          widthTablet="192px"
          heigthTablet="59px"
          fontSize="16px"
          fontSizeTablet="16px"
          lineHeight="18px"
          onClick={() => {
            dispatch(logoutUser());
          }} 
        >
          Log out
        </Button>
        <Button
          type="button"
          look="cancel"
          width="137px"
          widthTablet="192px"
          heigth="49px"
          heigthTablet="59px"
          fontSize="14px"
          fontSizeTablet="16px"
          lineHeight="18px"
          onClick={onClose} 
        >
          Cancel
        </Button>
      </Wrap>
    </Container>
  );
};

export default LogoutBtn;
