import styled from 'styled-components';

import { FiEdit2, FiArrowRight } from 'react-icons/fi';

export const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
`;

export const Modal = styled.div`
  position: absolute;
  padding: 18px;
  background-color: ${p => p.theme.colors.background};
  border: 1px solid #8baa36;
  border-radius: 8px;
  top: 72px;
  right: 60px;

  @media screen and (min-width: 768px) {
    top: 78px;
    right: 128px;
  }
  @media screen and (min-width: 1440px) {
    right: 211px;
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
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1.6;
  color: ${p => p.theme.colors.headerText};
`;

export const ButtonEdit = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.headerText};
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.4);
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const EditIcon = styled(FiEdit2)`
  width: 14px;
  height: 14px;
`;

export const LogOutIcon = styled(FiArrowRight)`
  width: 18px;
  height: 18px;
  margin-left: ${p => p.theme.space[2]}px;
`;
