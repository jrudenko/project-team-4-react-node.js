import React from 'react';
import { useEffect } from 'react';


import arrowRight from '../../../images/icon/arrow-right.png' //уточнити назви іконок
import editInput from '../../../images/SVG/editInput.svg'
import { ModalWrapper, EditProfile,EditInputIcon, EditBtn, LogoutBtn,LogoutIcon } from './UserLogoModal.styled';


export const UserLogoModal = ({ onClose, onLogout, onEdit }) => {
     useEffect(() => {
         window.addEventListener('keydown', handleKeyDown);
         return () => window.removeEventListener('keydown', handleKeyDown)
     });
     const handleKeyDown = e => {
         if (e.code === 'Escape') {
             onClose();
         }
     };

     return (
         <ModalWrapper>
             <EditProfile>
                 <p>
                     Edit profile
                 </p>
                 <EditBtn onClick={onEdit}>
                     <EditInputIcon src={editInput} alt = "edit button"/>
                 </EditBtn>
             </EditProfile>
             <LogoutBtn onClick={onLogout}>
                 <p>
                     Logout
                 </p>
                 <LogoutIcon src={arrowRight} alt="Logout button" />
             </LogoutBtn>
         </ModalWrapper>
     )
 };