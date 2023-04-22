
import styled from 'styled-components'; 


export const Wrapper = styled.div`
padding: 44px 24px;
@media (min-width: 768px) {
padding: 50px 50px;
  }
`;

export const Text = styled.p`
margin-bottom: 24px;
font-size: 14px;
letter-spacing: -0.02em;
text-align: center;
@media (min-width: 768px) {
font-size: 18px;
  }
`;

export const BtnWrapper = styled.div`
display: flex;
gap:8px;
@media (min-width: 768px) {
gap:16px;
  }
`;

export const Button = styled.button`
width:100%;
height:50%;
border: none;
border-radius: 6px;
font-size: 14px;
color:'#23262A';
background-color:'#D9D9D9';
cursor: pointer;
@media (min-width: 768px) {
height:60px;
font-size:18px;
  }
`;