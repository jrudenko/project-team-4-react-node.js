import styled from 'styled-components';

import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FiEdit2, FiUser } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Form, Field } from 'formik';

export const FormEdit = styled(Form)`
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export const ButtonClose = styled.button`
  z-index: 99;
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;

  color: ${p => (p.dark ? '#FAFAFA' : '#333333')};
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LabelPhoto = styled.label`
  position: relative;
  margin-bottom: 54px;
  width: 88px;
  height: 88px;
  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
    margin-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 52px;
  }
`;
export const Photo = styled.img`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 88px;
  @media screen and (min-width: 768px) {
  }
`;
export const ButtonAdd = styled.button`
  z-index: 1;
  position: absolute;
  bottom: -6px;
  right: 13px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${p => p.theme.colors.accentColor};

  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.2);
    color: ${p => (p.dark ? '#FAFAFA' : '#333333')};
  }

  @media screen and (min-width: 768px) {
    bottom: -2px;
    right: 10px;
  }
`;

export const PlusIcon = styled(BsFillPlusCircleFill)`
  width: 24px;
  height: 24px;
`;

export const LabelInput = styled.label`
  position: relative;
  color: ${p => p.theme.colors.headerText};

  :focus-within > svg {
    color: ${p => p.theme.colors.accentColor};
  }
`;
export const UserIcon = styled(FiUser)`
  position: absolute;
  top: 17px;
  left: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 18px;
    left: 19px;
  }
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    top: 17px;
  }
`;
export const EditIcon = styled(FiEdit2)`
  position: absolute;
  top: 17px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 17px;
    right: 14px;
  }
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    top: 17px;
    right: 14px;
  }
`;

export const Input = styled(Field)`
  padding: 15px 40px 11px 40px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.headerText};
  outline: none;
  background-color: transparent;
  width: 282px;

  border: 1px solid ${p => p.theme.colors.headerText};
  border-radius: 6px;
  margin-bottom: 24px;
  :focus-within {
    border: 1px solid ${p => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 16px 50px 14px 50px;
    margin-bottom: 32px;
    font-size: ${p => p.theme.fontSizes.m}px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 50px;
  }
`;
