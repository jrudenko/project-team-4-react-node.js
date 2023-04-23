import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 225px;
  height: 92px;
  right: 100px;
  top: 300px;

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

export const Title = styled.span`
  position: absolute;
  width: 209px;
  height: 54px;
  left: 8px;
  top: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* or 150% */

  letter-spacing: -0.24px;

  > span {
    color: ${p => p.theme.colors.primaryText};
    margin-left: 4px;
  }

  color: ${p => p.theme.colors.colorAccent};
  @media screen and (min-width: 768px) {
    width: 236px;
    left: 12px;
    top: 12px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* or 129% */

    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 1200px) {
    width: 266px;
    height: 60px;
    left: 16px;
    top: 16px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    letter-spacing: -0.24px;
  }
`;
