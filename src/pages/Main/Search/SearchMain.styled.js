import styled from 'styled-components';

const MainSearch = styled.form`
  position: relative;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid rgba(35, 38, 42, 0.2);
  border-radius: 24px 44px;
  height: 52px;
  width: 295px;
  margin-right: 3px;
  margin-bottom: 83px;
  margin-left: 4px;

  @media ${props => props.theme.device.tablet} {
    order: 2;
    height: 59px;
    width: 362px;
    margin-top: 3px;
    margin-left: 32px;
  }
  @media ${props => props.theme.device.desktop} {
    height: 70px;
    width: 510px;
    margin-top: 20px;
    margin-left: 100px;
  }

  & > button {
    position: absolute;
    left: 183px;
    top: -1px;
    @media ${props => props.theme.device.tablet} {
      left: 208px;
    }
    @media ${props => props.theme.device.desktop} {
      left: 348px;
    }
  }

  & > input {
    position: absolute;
    background: rgba(0, 0, 0, 0);
    padding: 0;
    width: 295px;
    border: 0;
    outline: none;
    border-radius: 0;
    top: 17px;
    left: 34px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #bdbdbd;
    @media ${props => props.theme.device.tablet} {
      font-size: 16px;
      line-height: 24px;
      top: 19px;
      left: 31px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 16px;
      line-height: 24px;
      top: 23px;
      left: 48px;
    }
  }
`;

export default MainSearch;
