import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations'

import { editInput, arrowRight } from '../../images/SVG' //уточнити назви іконок
import { ModalWrapper, EditProfile,EditInputIcon, LogoutBtn,LogoutIcon } from 'pages/Favorites/Favorites.styled';


export const UserLogoModel = () => {
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