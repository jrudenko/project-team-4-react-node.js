import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';


export const FormWrapper = styled.div`
  position: relative;
  top: -28px;
  width: 335px;
  height: auto;
  padding: 40px 28px;
  background-color: ${p => p.theme.colors.form.formBackground};
  border-radius: 30px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
 
  @media screen and (min-width: 768px) {
    width: 500px;
    height: auto;
    padding: 44px 50px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    height: auto;
    padding: 44px 50px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 18px;
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: ${p => p.theme.fontSizes.xl}px;
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: -0.02em;
  color: #fafafa;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.authxl}px;
  }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 50px;
  }
`;

export const FormLabel = styled.label`
  position: relative;
`;

export const IconName = styled(FiUser)`
  position: absolute;
  top: 50%;
  left: 0;
  color: ${({ state }) => {
    switch (state) {
      case 'checked':
        return '#3CBC81';
      case 'error':
        return '#E74A3B';
      default:
        return '#fafafa';
    }
  }};
  opacity: ${({ state }) => {
    switch (state) {
      case 'checked':
        return 1;
      case 'error':
        return 1;
      default:
        return 0.4;
    }
  }};
  transform: translate(13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconEmail = styled(HiOutlineMail)`
  position: absolute;
  top: 50%;
  left: 0;
  color: ${({ state }) => {
    switch (state) {
      case 'checked':
        return '#3CBC81';
      case 'error':
        return '#E74A3B';
      default:
        return '#fafafa';
    }
  }};
  opacity: ${({ state }) => {
    switch (state) {
      case 'checked':
        return 1;
      case 'error':
        return 1;
      default:
        return 0.4;
    }
  }};
  transform: translate(13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconPassword = styled(FiLock)`
  position: absolute;
  top: 50%;
  left: 0;
  color: ${({ state }) => {
    switch (state) {
      case 'checked':
        return '#3CBC81';
      case 'error':
        return '#E74A3B';
      case 'warning':
        return '#F6C23E';
      default:
        return '#fafafa';
    }
  }};
  opacity: ${({ state }) => {
    switch (state) {
      case 'checked':
        return 1;
      case 'error':
        return 1;
      case 'warning':
        return 1;
      default:
        return 0.4;
    }
  }};
  transform: translate(13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ErrorIcon = styled(IoIosCloseCircle)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.form.inputError};
  transform: translate(-13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const WarningIcon = styled(RiErrorWarningFill)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.form.inputWarning};
  transform: translate(-13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const CheckIcon = styled(IoIosCheckmarkCircle)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.form.inputConfirm};
  transform: translate(-13px, -50%);
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const FormInput = styled(Field)`
  width: 100%;
  height: 45px;
  padding-left: 40px;
  padding-right: ${({ state }) =>
    state === 'error' || state === 'checked' ? '40px' : '10px'};
  color: ${p => p.theme.colors.form.inpBorder};
  background-color: transparent;
  border: ${({ state }) => {
    switch (state) {
      case 'checked':
        return '1px solid #3CBC81';
      case 'error':
        return '1px solid #E74A3B';
      case 'warning':
        return '1px solid #F6C23E';
      default:
        return '1px solid #fafafa';
    }
  }};
  border-radius: 6px;
  opacity: 0.8;
  ::placeholder {
    font-family: 'Poppins';
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: ${p => p.theme.lineHeights.body};
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.form.formIcon};
  }
  :hover,
  :focus + svg {
    opacity: 1;
  }
  :hover,
  :focus {
    opacity: 1;
    outline: none;
    ::placeholder {
      color: ${p => p.theme.colors.form.inpBorder};
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    height: 60px;
    padding-left: 50px;
    padding-right: ${({ state }) =>
      state === 'error' || state === 'checked' ? '50px' : '10px'};
  }
`;

export const ErrMess = styled.p`
  position: absolute;
  font-size: 10px;
  line-height: 1.2;
  color: #e74a3b;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const WarMess = styled.p`
  position: absolute;
  font-size: 10px;
  line-height: 1.2;
  color: #f6c23e;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const SuccMess = styled.p`
  position: absolute;
  font-size: 10px;
  line-height: 1.2;
  color: #3cbc81;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const FormLink = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: -30px;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-decoration-line: underline;
  color: ${p => p.theme.colors.whiteText};
  transform: translateX(-50%);
  transition: color 250ms ease;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.sm}px;
    line-height: ${p => p.theme.lineHeights.body};
  }
  :hover {
    color: ${p => p.theme.colors.colorAccent};
  }
`;
