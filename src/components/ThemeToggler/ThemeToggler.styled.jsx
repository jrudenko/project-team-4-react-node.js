import styled from 'styled-components';

export const TogglContainer = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;
  width: 61px;
  height: 27px;
  border-radius: 50px;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.isActive
      ? props.theme.colors.colorAccent
      : props.theme.colors.white};
`;

export const TogglCircle = styled.div`
  display: none;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  margin-left: ${({ isActive }) => (isActive ? 'calc(100% - 20px)' : '2px')};
`;
