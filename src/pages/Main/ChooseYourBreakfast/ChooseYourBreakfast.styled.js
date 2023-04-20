import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 225px;
  height: 92px;
  right: 0px;
  top: 0px;
  z-index: 1;
  background: #fafafa;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 100px;
    background: #ffffff;
    border-radius: 8px;

    @media screen and (min-width: 1200px) {
      width: 298px;
      height: 114px;
    }
  }
`;
