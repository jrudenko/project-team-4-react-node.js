import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations'


import arrowRight from '../../images/icon/arrow-right.png' //уточнити назви іконок
import editInput from '../../images/SVG/editInput.svg'
import { ModalWrapper, EditProfile,EditInputIcon, LogoutBtn,LogoutIcon } from './UserLogoModal.styled';


export const UserLogoModal = () => {
    const dispatch = useDispatch();

const handleBtnLogoutClick = () => {
        dispatch(logOut());
    };

    return (
        <ModalWrapper>
            <EditProfile>
                <p>
                    Edit profile
                    <EditInputIcon src={editInput} alt = "edit button"/>
                </p>
            </EditProfile>
            <LogoutBtn onClick={handleBtnLogoutClick}>
                <p>
                    Logout
                </p>
                <LogoutIcon src={arrowRight} alt="Logout button" />
            </LogoutBtn>

        </ModalWrapper>
    )
};