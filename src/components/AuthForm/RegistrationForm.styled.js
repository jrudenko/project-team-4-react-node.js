import styled from 'styled-components';
import { Form, Field } from 'formik';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { ReactComponent as envelope } from '../../images/SVG/envelope.svg';

export const FormBox = styled.div`
  /* position: absolute;
  width: 335px;
  height: 350px;
  left: 20px;
  top: 305px;

  background: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px; */
`;

export const TitleForm = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: 18px;
  color: #fafafa;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 32px;
  }
`;

export const FormAuth = styled(Form)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: -35px auto 18px auto;
  padding: 40px 28px;
  width: 100%;
  border-radius: 30px;
  background-color: #2a2c36;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 500px;
    padding: 44px 50px;
    margin: -10px auto 18px auto;
  }
  @media screen and (min-width: 1281px) {
    width: 500px;
    padding: 44px 50px;
  }
`;

export const FormField = styled(Field)`
  box-sizing: border-box;
  font-family: 'Poppins';
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 18px;
  line-height: 1.5px;
  letter-spacing: -0.02em;
  &::placeholder {
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #ffffff;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 12px 16px 12px 46px;
  }
`;

export const BoxForForm = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const BoxForField = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  isolation: isolate;
  opacity: 0.8;
  height: 70px;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  &:hover {
    opacity: 1;
  }
`;
export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  margin-top: 28px;
  font-size: 16px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #8baa36;
  color: #fafafa;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  cursor: pointer;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    height: 56px;
    margin-top: 50px;
  }
  &:hover:not([disabled]),
  :focus:not([disabled]) {
    color: #22252a;
  }
  &[disabled] {
    opacity: 0.7;
  }
`;

export const BoxForIcon = styled.div`
  width: 15px;
  height: 15px;
  top: 21px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    left: 18px;
    top: 18px;
  }
`;

export const NameIcon = styled(BiUser)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  opacity: 80%;
  color: #fafafa;
  stroke: ${({ stroke }) => stroke};
`;

export const EmailIcon = styled(envelope)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  opacity: 80%;
  color: #fafafa;
  fill: none;
  fill: ${({ stroke }) => stroke};
`;

export const PassIcon = styled(RiLockPasswordLine)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  opacity: 80%;
  fill: ${({ stroke }) => stroke};
`;

export const Warning = styled.div`
  display: block;
  margin-top: 8px;
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.5;
  color: red;
`;
