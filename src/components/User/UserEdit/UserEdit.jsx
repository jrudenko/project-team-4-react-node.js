import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo, updateUserAvatar } from '../../../redux/auth/operations';

import { Wrapper, Form, Button } from './UserEdit.styled';
import { AvatarEdit } from './AvatarEdit/AvatarEdit';
import { InfoEdit } from './InfoEdit/InfoEdit.styled';


export const UserInfoEdit = () => {
    const [newAvatar, setNewAvatar] = useState(null);
    const [isNewInfo, setIsNewInfo] = useState(false);
    useEffect(() => {
        setNewAvatar(null);
        setIsNewInfo(false);
    }, [])

    const dispatch = useDispatch();

    const changeAvatar = () => {
        const formData = new FormData();
        formData.append('avatar', newAvatar);
        dispatch(updateUserAvatar(formData));
    };

    const changeInfo = () => e => {
        const updatedInfo = {
            name: e.target.name.value
        };
        dispatch(updateUserInfo(updatedInfo));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (newAvatar) changeAvatar();
        if (isNewInfo) changeInfo(e);
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <AvatarEdit updateUserAvatar={avatar => setNewAvatar(avatar)} />
                <InfoEdit updateUserInfo={() => setIsNewInfo(true)} />
                <Button>
                    Save changes
                </Button>
            </Form>
        </Wrapper>
    )
}