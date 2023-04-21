
import styled from 'styled-components';


export const Overlay = styled.div`
position: fixed;
top:0;
left:0;
width:100vw;
height:100vh;
display: flex;
justify-content: center;
background-color: rgba(0, 0, 0, 0.1);
z-index: 999;
`;

export const ModalWrapper = styled.div`
position:absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
width: 330px;
max-height: 100%;
background-color: '#FAFAFA';
box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
border-radius: 24px;
@media (min-width: 768px) {
width: 480px;
}
`;

export const BtnClose = styled.button`
position: absolute;
top: 18px;
right: 18px;
display: flex;
justify-content: center;
align-items: center;
border: none;
padding: 0;
cursor: pointer;
background: transparent;
color: '#22252A'

&:hover,
&:focus {
    color: '#8BAA36';
  }
`;

export const IconClose = styled.img`
width: 24px;
height: 24px;
`;

