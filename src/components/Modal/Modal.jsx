import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { BackdropModal, ModalWindow } from './Modal.styled';


const Modal = ({ onClose, children, isMenu }) => {
    
    const backdropClickHandler = evt => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    };

  useEffect(() => {
      const escapeListener = evt => {
          if (evt.code === 'Escape') {
              onClose();
          }
      };

    document.querySelector('html').style.overflow = 'hidden';
    window.addEventListener('keydown', escapeListener);

    return () => {
      document.querySelector('html').style.overflow = 'visible';
      window.removeEventListener('keydown', escapeListener);
    };
  }, [onClose]);

  

  return ReactDOM.createPortal(
    <BackdropModal onClick={backdropClickHandler}>
      <ModalWindow isMenu={isMenu}>{children}</ModalWindow>
    </BackdropModal>,
    document.querySelector('#modal-root')
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};