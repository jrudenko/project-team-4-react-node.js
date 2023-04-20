import styled from 'styled-components';


export const InfoWrapper = styled.div`
margin-bottom: 24px;
display: flex;
flex-direction: column;
gap: 24px;
@media (min-width: 768px) {
    margin-bottom: 32px;
    gap: 32px;
  }
`;

export const InputBox = styled.div`
position: relative;
`;

export const Input = styled.input`
border: 1px solid '#23262A';
border-radius: 6px;
padding-left: 40px;
width: 100%;
height: 48px;
background-color: transparent;
color: '#23262A';
font-size: 14px;
letter-spacing: -0.02em;
@media (min-width: 768px) {
    padding-left: 52px;
    font-size: 18px;
  }
`;

export const InputIcon = styled.img`
position: absolute;
top: 50%;
left: 14px;
transform: translateY(-50%);

width:18px;
heihgt:18px;

@media (min-width: 768px) {
    left: 18px;
  }
`


