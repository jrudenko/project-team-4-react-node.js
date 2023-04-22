import { UserLogo } from "./UserLogo/UserLogo";
import { UserLogoModal } from "./UserLogoModal/UserLogoModal";
import { UserInfoModal } from "./UserInfoModal/UserInfoModal";
import { LogoutBtn } from "./LogoutBtn/LogoutBtn";
import { UserEdit } from "./UserEdit/UserEdit";

import { Wrapper } from "./User.styled";

import { useState } from "react";

export const User = () => {
    const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [modalName, setModalName] = useState('edit');

    const toggleLogoModal = () => {
        setIsLogoModalOpen(current => !current);
    };

    const toggleInfoModal = () => {
        setIsInfoModalOpen(current => !current);
    };

    const openEditUser = () => {
        toggleInfoModal();
        toggleLogoModal();
        setModalName('edit');
        
    };

    const openLogoutApproval = () => {
        toggleInfoModal();
        toggleLogoModal();
        setModalName('logout');
    }

    return (
        <Wrapper>
            <UserLogo toggleBoard={toggleLogoModal} />

            {isLogoModalOpen && (
                <UserLogoModal
                    onClose={toggleLogoModal}
                    onLogout={openLogoutApproval}
                    onEdit={openEditUser}
                />
            )}
            {isInfoModalOpen && (
                <UserInfoModal onClose={toggleInfoModal}>
                    {modalName === 'logout' ? (
                        <LogoutBtn onClose={toggleInfoModal} />
                    ) : (
                        <UserEdit onClose={toggleInfoModal} />
                    )}
                </UserInfoModal>
            )}
        </Wrapper>
    );
};