import styled from 'styled-components';

export const BtnMain = styled.button`
  background-color: ${props => props.bgColor};
  color: white;
  border-radius: 24px 44px;
  border: 1px solid;
  padding: 12px 24px;
  :hover {
    background-color: #8baa36;
    border-color: #8baa36;
  }
`;
