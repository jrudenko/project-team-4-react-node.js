import styled from 'styled-components';

const MainSearch = styled.form`
  position: relative;
  clip-path: path(
    'M17.3333 0.5H260.333C279.203 0.5 294.5 15.7969 294.5 34.6667C294.5 43.9635 286.963 51.5 277.667 51.5H34.6667C15.7969 51.5 0.5 36.2031 0.5 17.3333C0.5 8.03654 8.03654 0.5 17.3333 0.5Z'
  );
  background-color: black;
  border: none;
  height: 52px;
  width: 295px;
  margin-right: 3px;
  margin-bottom: 83px;
  margin-left: 4px;

  @media ${props => props.theme.device.tablet} {
    order: 2;
    height: 59px;
    width: 362px;
    clip-path: path(
      'M0.5 19.6667C0.5 9.08121 9.08121 0.5 19.6667 0.5H322.667C344.114 0.5 361.5 17.8863 361.5 39.3333C361.5 49.9188 352.919 58.5 342.333 58.5H39.3333C17.8863 58.5 0.5 41.1137 0.5 19.6667Z'
    );
    margin-top: 3px;
    margin-left: 32px;
  }
  @media ${props => props.theme.device.desktop} {
    clip-path: path(
      'M0.5 23.3333C0.5 10.7228 10.7228 0.5 23.3333 0.5H463.333C488.83 0.5 509.5 21.1695 509.5 46.6667C509.5 59.2772 499.277 69.5 486.667 69.5H46.6667C21.1695 69.5 0.5 48.8305 0.5 23.3333Z'
    );
    height: 70px;
    width: 510px;
    margin-top: 20px;
    margin-left: 100px;
  }

  & > button {
    position: absolute;
    left: 183px;
    top: 0;
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
