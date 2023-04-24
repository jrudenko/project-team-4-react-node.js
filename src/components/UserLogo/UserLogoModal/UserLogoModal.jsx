import { useState, useEffect } from 'react';
import  Button  from '../../Button';
import ModalWrap from '../ModalWrap/ModalWrap';

import {
  LogOutIcon,
  Modal,
  EditIcon,
  Text,
  Wrap,
  Overlay,
  ButtonEdit,
} from './UserLogoModal.styled';

const UserLogoModal = ({ openModalEdit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', clickCloseModal);
    return () => {
      window.removeEventListener('keydown', clickCloseModal);
    };
  });
  const clickCloseModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      return openModalEdit();
    }
  };

  const toggleModal = () => {
    setModalOpen(state => !state);
  };

  return (
    <Overlay onClick={clickCloseModal}>
      <Modal>
        <Wrap>
          <Text>Edit profile</Text>
          <ButtonEdit
            onClick={() => {
              toggleModal();
              setEditModal(true);
            }}
          >
            <EditIcon />
          </ButtonEdit>
        </Wrap>
        <Button
          onClick={() => {
            toggleModal();
            setEditModal(false);
          }}
          look="rounded_dark"
          type="button"
          width="125px"
          widthTablet="141px"
          heigth="43px"
          fontSize="14px"
          lineHeight="21px"
        >
          Log out
          <LogOutIcon />
        </Button>
      </Modal>
      {modalOpen && <ModalWrap openModal={toggleModal} edit={editModal} />}
    </Overlay>
  );
};

export default UserLogoModal;
