import { useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
import Avatar from '../../images/avatar.png';
import { useLocation, useParams } from 'react-router-dom';
import UserLogoModal from './UserLogoModal/UserLogoModal';

import { Container, Photo, WrapPhoto, Name } from './UserLogo.styled';

const UserLogo = () => {
  const { pathname } = useLocation();
  const recipe = useParams();
  const [modalIsOpen, setmodalIsOpen] = useState(false);
const { user } = useAuth();

  const toggleModalEdit = () => setmodalIsOpen(state => !state);
  return (
    <Container>
      <WrapPhoto onClick={toggleModalEdit}>
        <Photo src={user?.avatar ?? Avatar} alt="user" />
        <Name pathname={pathname} recipe={recipe}>
          {user?.name ?? 'User'}
        </Name>
      </WrapPhoto>
      {modalIsOpen && <UserLogoModal openModalEdit={toggleModalEdit} />}
    </Container>
  );
};

export default UserLogo;
