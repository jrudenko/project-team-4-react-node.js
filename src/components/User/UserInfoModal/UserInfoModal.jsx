import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import {Overlay, ModalWrapper, BtnClose, IconClose} from './UserInfoModal.styled'

import closeBtn from '../../../images/SVG/Social/closeBtn.svg';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ children, onClose }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };


    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onclose();
        }
    };
    return createPortal(
        <Overlay onClick={handleBackDropClick}>
            <ModalWrapper>
                <BtnClose onClick={onClose}>
                    <IconClose src={closeBtn} />
                </BtnClose>
                {children}
            </ModalWrapper>
        </Overlay>,
        modalRoot
    );
};

