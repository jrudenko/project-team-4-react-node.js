import styled from 'styled-components';

export const AvatarWrapper = styled.div`
border-radius: 50%;
`;

export const Label = styled.label`
position:relative;
display: inline-block;
margin-bottom:50px;
cursor:pointer;

&img {
    object-fit: cover;
    border-radius: 50%;
    width: 88px;
    height: 88px;
}
`;

export const AvatarInput = styled.input`
visibility: hidden;
width: 0;
height: 0;
`;

export const PlusIcon = styled.img`
position: absolute;
right: 0;
bottom: 0;
width: 24px;
height: 24px;
fill: 8BAA36;
`;