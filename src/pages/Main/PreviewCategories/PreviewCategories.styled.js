import styled from 'styled-components';

export const Button = styled.button`
  line-height: 14px;
  width: 195px;
  height: 46px;
  border: ${p => p.theme.colors.subscribeBgColor};
  color: ${p => p.theme.colors.inputBg};
  border: 2px solid #8baa36;
  border-radius: 24px 44px;
  padding: 12px 24px;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.colorAccent};
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    line-height: 24px;
width: 239px;
  height: 61px;
  }
`;

const PreviewCategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${p => -p.theme.space[4]}px;
  margin-right: ${p => -p.theme.space[4]}px;
  margin-bottom: -100px;
  padding-bottom: 100px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
  }

  @media ${props => props.theme.device.tablet} {
    margin-left: ${p => -p.theme.space[5]}px;
    margin-right: ${p => -p.theme.space[5]}px;
    padding-bottom: 5px;
    padding-bottom: 100px;
    margin-bottom: -200px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    }
  }

  @media ${props => props.theme.device.desktop} {
    padding-bottom: 23px;
    margin-left: -100px;
    margin-right: -100px;
    padding-bottom: 115px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    }
  }
`;

export default PreviewCategoriesStyled;
