import styled from 'styled-components';

export const TogglContainer = styled.div`
  display: flex;
  display: none;
  width: 61px;
  height: 27px;
  border-radius: 50px;
  background-color: ${props => props.isActive ? '#8BAA36' : '#ccc'};
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
`;

export const TogglCircle = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-left: ${props => props.isActive ? '38px' : '2px'};
  transition: margin-left 0.4s ease-in-out;
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
`;