import { useAuth } from "../../../hooks/useAuth";
import Avatar from '../../../images/SVG/add-avatar.svg';
import {UserLogoWrapper, UserBtn, UserName} from './UserLogo.styled'

export const UserLogo = ({ toggleBoard }) => {
    const { user } = useAuth();

    return (
        <UserLogoWrapper>
            <UserBtn type="button" onClick={toggleBoard}>
                <img src={user?.avatar ?? Avatar} alt="user" />
                <UserName>{user?.name ?? 'user'}</UserName>
            </UserBtn>
        </UserLogoWrapper>
    );
};

