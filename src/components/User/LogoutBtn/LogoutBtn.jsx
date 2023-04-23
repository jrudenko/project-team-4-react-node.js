import { useDispatch } from "react-redux";

import { logoutUser } from '../../../redux/auth/operations';

import { Wrapper, Text, BtnWrapper, Button } from "./LogoutBtn.styled";

export const LogoutBtn = ({ onClose }) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logoutUser());
    };
    return (
        <Wrapper>
            <Text>Are you sure you want to log out?</Text>
            <BtnWrapper>
                <Button onClick={onLogout}>
                    Log out
                </Button>
                <Button onClick={onClose}>
                    Cancel
                </Button>
            </BtnWrapper>
        </Wrapper>
    )
}