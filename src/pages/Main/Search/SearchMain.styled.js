import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const BtnSearch = styled.button`
  position: absolute;
  transform: translate(-100%, 70%);
  background-color: ${props => props.bgColor};
  color: white;
  border-radius: 24px 44px;
  border: 1px solid;
  padding: 12px 24px;
  width: 161px;
  height: 70px;
`;

export const InputSearch = styled.input`
  width: 510px;
  height: 70px;
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  padding: 12px 24px;
  margin-top: 50px;
  &:focus {
    outline: 1px solid rgba(35, 38, 42, 0.2);
  }
`;
