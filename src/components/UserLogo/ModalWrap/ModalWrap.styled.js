import styled from 'styled-components';

import { FiEdit2, FiArrowRight } from 'react-icons/fi';

export const Overlay = styled.div`
  z-index: 120;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.backdropColor};
`;

export const Modal = styled.div`
  position: absolute;
  padding: 24px;
  background: #fafafa;
  background-color: ${p => p.theme.colors.background};
  border-radius: 24px;

  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 50px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 28px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: #23262a;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover {
    color: #8baa36;
  }
`;

export const EditIcon = styled(FiEdit2)`
  width: 14px;
  height: 14px;
`;

export const LogOutIcon = styled(FiArrowRight)`
  width: 18px;
  height: 18px;
  margin-left: 4px;
`;
