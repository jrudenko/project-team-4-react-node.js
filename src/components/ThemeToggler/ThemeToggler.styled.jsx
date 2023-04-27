import styled from 'styled-components';

export const TogglContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TogglCircle = styled.input`
  position: relative;
  width: 61px;
  height: 27px;
  outline: none;
  background-color: #EFEFEF;
  border-radius: 50px;
  transition: 0.5s;
  background: #EFEFEF;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  -webkit-appearance: none;
  cursor: pointer;
  &:checked {
    background: ${p => p.theme.colors.colorAccent};
    box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
    ::before {
      left: 37px;
      background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
      filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50px;
    top: 50%;
    left: 3px;
    filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
    background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
    transition: 0.5s;
    transform: scale(1) translateY(-50%);
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;