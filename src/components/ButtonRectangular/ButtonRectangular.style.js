import styled from 'styled-components';

export const RectanBtn = styled.button`
  background-color: ${props => props.bgColor};
  color: ${p => p.theme.colors.secondaryDark};
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 81px;
  height: 18px;
  left: 136px;
  top: 66px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    padding: 12px 24px;
    width: 192px;
    height: 59px;
  }

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px 39px;
  gap: 8px; */
`;
