import { useState } from 'react';
import { useAuth } from '../../../../hooks/useAuth';

import {InfoWrapper, InputBox, Input, InputIcon} from './InfoEdit.styled'

import editInput from '../../../../images/SVG/editInput.svg'

export const InfoEdit = ({ updateInfo }) => {
    const { user: { name } } = useAuth();
    const [newName, setNewName] = useState(name);

    const onChange = (e) => {
        const { name, value } = e.target
        if (name === "name") setNewName(value);
        updateInfo();
    }

    return (
        <InfoWrapper>
            <InputBox>
                <Input
                    name="name"
                    placeholder="Name"
                    value={newName}
                    onChange={onChange}
                />
                <InputIcon src={editInput} alt="editInfo" />
            </InputBox>
        </InfoWrapper>
    )
};