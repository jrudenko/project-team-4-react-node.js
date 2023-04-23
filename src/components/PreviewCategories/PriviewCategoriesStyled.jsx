import styled from 'styled-components';

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
