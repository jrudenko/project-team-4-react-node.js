import { useState } from 'react';
import { useAuth } from '../../../../hooks/useAuth';

import {AvatarWrapper, Label, PlusIcon, AvatarInput} from './AvatarEdit.styled'

import Avatar from '../../../../images/SVG/add-avatar.svg';
import Plus from '../../../../images/plus.svg';

export const AvatarEdit = ({ updateAvatar }) => {
    const [avatarPreview, setAvatarPreview] = useState(null);
    const { user } = useAuth();

    const handleAvatarChange = event => {
        const avatar = event.target.files[0];
        setAvatarPreview(URL.createObjectURL(avatar));
        updateAvatar(avatar);
    };

    return (
        <AvatarWrapper>
            <Label htmlFor="avatar">
                {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar preview" />
                ) : (
                    <img src={user?.avatar ?? Avatar} alt="avatar" />
                )}
                <PlusIcon src={Plus} />
            </Label>
            <AvatarInput
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleAvatarChange}
            />
        </AvatarWrapper>
    );
};