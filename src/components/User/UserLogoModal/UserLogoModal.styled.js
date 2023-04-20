import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  width: 161px;
  height: 130px;
  left: 154px;
  top: 72px;
  padding: 18px;
  border: 1px solid #8BAA36;
  border-radius: 8px;
  background-color: #FAFAFA;
  @media (min-width: 768px) {
    width: 177px;
    height: 134px;
    border: none;
  }
`;

export const EditProfile = styled.button`
position: relative;
display: block;
width: 125px;
height: 23px;
margin-right: auto;
margin-left: auto;
margin-bottom: 28px;
padding: 0;
text-align: left;
font-size: 14px;
font-weight: 600;
background-color: #FAFAFA;
border-color: transparent;
outline: none;
@media (min-width: 768px) {
   width: 141px;
   margin-bottom: 32px;
  }
`;

export const EditInputIcon = styled.img`
position: absolute;
top: 50%;
left: 100%;
transform: translate(-100%, -50%);
display: block;
width: 14px;
height: 14px;
`;

export const LogoutBtn = styled.button`
position:relative;
display: block;
width: 125px;
height: 43px;
margin-right: auto;
margin-left: auto;
padding: 12px 24px;
color: #FAFAFA;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
text-align: left;
background-color: #8BAA36;
border-radius: 24px 44px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
border 250ms cubic-bezier(0.4, 0, 0.2, 1);
@media (min-width: 768px) {
  width: 141px;
  }
`;

export const LogoutIcon = styled.img`
position: absolute;
display: block;
top: 50%;
left: 80%;
transform: translate(-100%, -50%);
width: 18px;
height: 18px;
`;

// background-color: ${p => p.theme.colors.mainBgColor};