import styled from 'styled-components';

export const DivLabelStyled = styled.div`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-bottom: 1px solid red;
  display: flex;

  :hover {
    background-color: #8baa36;
    border-color: #8baa36;
  }
  label {
  }
  input[type='text'] {
    margin-left: 15px;
    background-color: inherit;
    border: none;
    outline: none;
  }
`;
