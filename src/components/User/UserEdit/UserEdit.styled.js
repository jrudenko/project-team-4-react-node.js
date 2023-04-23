import styled from 'styled-components';

export const Wrapper = styled.div`
padding:32px 24px;
text-align: center;

@media (min-width: 768px) {
padding:60px 50px;
  }
`;

export const Form = styled.form``;

export const Button = styled.button`
width:100%;
height:50%;
border: none;
border-radius: 6px;
font-size: 14px;
color:'#FAFAFA';
background-color:'#8BAA36';
cursor: pointer;
@media (min-width: 768px) {
height:60px;
font-size:18px;
  }`