import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';

export const FormWrapper = styled.div`
  position: absolute;
  top: 305px;
  right: 50%;
  width: 335px;
  height: auto;
  padding: 40px 28px;
  background-color: ${p => p.theme.colors.form.formBackground};
  border-radius: 30px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  transform: translateX(50%);
  @media screen and (min-width: 768px) {
    top: 443px;
    width: 500px;
    height: auto;
    padding: 44px 50px;
  }
  @media screen and (min-width: 1440px) {
    top: 50%;
    right: 180px;
    width: 500px;
    height: auto;
    padding: 44px 50px;
    transform: translateY(-50%);
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
  color: ${p => p.theme.colors.form.inputBorder};
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
    color: #fafafa;
  }
  :focus + svg {
    opacity: 1;
  }
  :focus {
    opacity: 1;
    outline: none;
    ::placeholder {
      color: #ffffff;
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
  color: #fafafa;
  transform: translateX(-50%);
  transition: color 250ms ease;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.sm}px;
    line-height: ${p => p.theme.lineHeights.body};
  }
  :hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

// import styled from 'styled-components';
// import { Form, Field } from 'formik';
// import { RiLockPasswordLine } from 'react-icons/ri';
// import { BiUser } from 'react-icons/bi';
// import { ReactComponent as envelope } from '../../images/SVG/envelope.svg';

// export const FormBox = styled.div`
//   /* position: absolute;
//   width: 335px;
//   height: 350px;
//   left: 20px;
//   top: 305px;

//   background: #2a2c36;
//   box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
//   border-radius: 30px; */
// `;

// export const TitleForm = styled.h1`
//   font-weight: 600;
//   font-size: 24px;
//   line-height: 1.17;
//   letter-spacing: -0.02em;
//   font-feature-settings: 'liga' off;
//   margin-bottom: 18px;
//   color: #fafafa;
//   @media screen and (min-width: 768px) {
//     font-size: 28px;
//     line-height: 1.07;
//     margin-bottom: 32px;
//   }
// `;

// export const FormAuth = styled(Form)`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   margin: -35px auto 18px auto;
//   padding: 40px 28px;
//   width: 100%;
//   border-radius: 30px;
//   background-color: #2a2c36;
//   @media screen and (min-width: 768px) and (max-width: 1280px) {
//     width: 500px;
//     padding: 44px 50px;
//     margin: -10px auto 18px auto;
//   }
//   @media screen and (min-width: 1281px) {
//     width: 500px;
//     padding: 44px 50px;
//   }
// `;

// export const FormField = styled(Field)`
//   box-sizing: border-box;
//   font-family: 'Poppins';
//   width: 100%;
//   padding: 12px 16px 12px 40px;
//   border: 1px solid #fafafa;
//   border-radius: 6px;
//   background-color: transparent;
//   color: #ffffff;
//   font-size: 18px;
//   line-height: 1.5px;
//   letter-spacing: -0.02em;
//   &::placeholder {
//     font-family: 'Poppins';
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 1.5;
//     letter-spacing: -0.02em;
//     color: #ffffff;
//     @media screen and (min-width: 768px) {
//       font-size: 18px;
//     }
//   }
//   @media screen and (min-width: 768px) {
//     padding: 12px 16px 12px 46px;
//   }
// `;

// export const BoxForForm = styled.div`
//   gap: 12px;
//   display: flex;
//   flex-direction: column;
//   @media screen and (min-width: 768px) {
//     gap: 24px;
//   }
// `;

// export const BoxForField = styled.div`
//   box-sizing: border-box;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   isolation: isolate;
//   opacity: 0.8;
//   height: 70px;
//   transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
//   &:hover {
//     opacity: 1;
//   }
// `;
// export const Button = styled.button`
//   box-sizing: border-box;
//   width: 100%;
//   height: 45px;
//   margin-top: 28px;
//   font-size: 16px;
//   text-align: center;
//   border: none;
//   border-radius: 10px;
//   background-color: #8baa36;
//   color: #fafafa;
//   transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
//   cursor: pointer;
//   margin-bottom: 20px;
//   @media screen and (min-width: 768px) {
//     height: 56px;
//     margin-top: 50px;
//   }
//   &:hover:not([disabled]),
//   :focus:not([disabled]) {
//     color: #22252a;
//   }
//   &[disabled] {
//     opacity: 0.7;
//   }
// `;

// export const BoxForIcon = styled.div`
//   width: 15px;
//   height: 15px;
//   top: 21px;
//   left: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   @media screen and (min-width: 768px) {
//     width: 18px;
//     height: 18px;
//     left: 18px;
//     top: 18px;
//   }
// `;

// export const NameIcon = styled(BiUser)`
//   box-sizing: border-box;
//   display: block;
//   width: 100%;
//   opacity: 80%;
//   color: #fafafa;
//   stroke: ${({ stroke }) => stroke};
// `;

// export const EmailIcon = styled(envelope)`
//   box-sizing: border-box;
//   display: block;
//   width: 100%;
//   opacity: 80%;
//   color: #fafafa;
//   fill: none;
//   fill: ${({ stroke }) => stroke};
// `;

// export const PassIcon = styled(RiLockPasswordLine)`
//   box-sizing: border-box;
//   display: block;
//   width: 100%;
//   opacity: 80%;
//   fill: ${({ stroke }) => stroke};
// `;

// export const Warning = styled.div`
//   display: block;
//   margin-top: 8px;
//   font-family: 'Poppins';
//   font-size: 14px;
//   line-height: 1.5;
//   color: red;
// `;
