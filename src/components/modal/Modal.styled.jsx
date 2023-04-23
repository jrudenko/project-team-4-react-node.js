import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ModalWindow = styled.div`
  overflow: hidden;
  border-radius: ${({ isMenu }) => (isMenu ? 0 : '24px')};
  background-color: ${props => props.theme.colors.white[100]};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
`;