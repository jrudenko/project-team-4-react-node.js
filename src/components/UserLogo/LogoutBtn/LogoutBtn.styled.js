import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const ButtonClose = styled.button`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 18px;
  right: 18px;
  margin-left: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${p => (p.dark ? '#FAFAFA' : '#333333')};

  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled(IoClose)`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.p`
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.headerText};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m}px;
    margin-bottom: 32px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;



export const ButtonC = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 49px;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  color: "#23262A";

  background-color: rgb(217, 217, 217);
  border: none;
  border-radius: 6px;
  transition: color 250ms ease 0s, background-color 250ms ease 0s, border 250ms ease 0s;
  
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.005);
    color: ${p => (p.dark ? '#8BAA36' : '#8BAA36')};
    border: 1px solid #23262A;
    
  }
  
@media screen and (min-width: 768px){
    width: 192px;
    height: 59px;
    font-size: 16px;
    line-height: 21px;
   
  

}
`;