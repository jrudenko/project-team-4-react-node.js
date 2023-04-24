import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import UserLogoModal from './UserLogoModal/UserLogoModal';

import { Container, Photo, WrapPhoto, Name } from './UserLogo.styled';

const UserLogo = () => {
  const { pathname } = useLocation();
  const recipe = useParams();
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const avatar = useSelector(state => state.auth.user.avatar);
  const name = useSelector(state => state.auth.user.name);

  const toggleModalEdit = () => setmodalIsOpen(state => !state);
  return (
    <Container>
      <WrapPhoto onClick={toggleModalEdit}>
        <Photo src={avatar} alt={name} />
        <Name pathname={pathname} recipe={recipe}>
          {name}
        </Name>
      </WrapPhoto>
      {modalIsOpen && <UserLogoModal openModalEdit={toggleModalEdit} />}
    </Container>
  );
};

export default UserLogo;
