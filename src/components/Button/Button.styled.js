import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${({ fsize }) => (fsize ? fsize : '16px')};
  line-height: ${({ lineheight }) => (lineheight ? lineheight : '21px')};
  cursor: pointer;
  color: ${({ look, theme }) =>
    look === 'cancel' || look === 'rounded_other'
      ? `${theme.colors.roundedOtherBtnColor}`
      : '#fafafa'};
  background-color: ${({ look, theme }) => {
    switch (look) {
      case 'subscribe':
        return `${theme.colors.subscribeBgColor}`;
      case 'subscribe_dark':
        return '#1E1F28';
      case 'rounded':
        return `${theme.colors.roundedBgColor}`;
      case 'rounded_dark':
        return `${theme.colors.roundedDarkBgColor}`;
      case 'rounded_transparent':
        return 'transparent';
      case 'rounded_other':
        return 'transparent';
      case 'logout':
        return '#8baa36';
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
    }
  }};
  border: ${({ look }) => {
    switch (look) {
      case 'rounded_transparent':
        return '2px solid #FAFAFA';
      case 'rounded_other':
        return '2px solid #8BAA36';
      default:
        return 'none';
    }
  }};
  border-radius: ${({ look }) => {
    switch (look) {
      case 'rounded':
        return '24px 44px';
      case 'rounded_dark':
        return '24px 44px';
      case 'rounded_transparent':
        return '24px 44px';
      case 'rounded_other':
        return '24px 44px';
      default:
        return '6px';
    }
  }};

  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  @media screen and (min-width: 768px) {
    width: ${({ width_tablet }) => width_tablet && width_tablet};
    height: ${({ heigth_tablet }) => heigth_tablet && heigth_tablet};
    font-size: ${({ fsize_tablet }) => (fsize_tablet ? fsize_tablet : '16px')};
    line-height: ${({ lineheight_tablet }) =>
      lineheight_tablet ? lineheight_tablet : '21px'};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ width_desktop }) => width_desktop && width_desktop};
    height: ${({ heigth_desktop }) => heigth_desktop && heigth_desktop};
    font-size: ${({ fsize_desktop }) =>
      fsize_desktop ? fsize_desktop : '16px'};
    line-height: ${({ lineheight_desktop }) =>
      lineheight_desktop ? lineheight_desktop : '21px'};
  }
  :hover,
  :focus {
    background-color: ${({ look, theme }) => {
      switch (look) {
        case 'subscribe':
          return `${theme.colors.subscribeBgColor}`;
        case 'subscribe_dark':
          return '#1E1F28';
        case 'rounded':
          return `${theme.colors.roundedBgHoverColor}`;
        case 'rounded_dark':
          return '#22252a';
        case 'rounded_transparent':
          return 'transparent';
        case 'rounded_other':
          return '#8baa36';
        case 'logout':
          return '#22252a';
        case 'cancel':
          return '#ffffff';
        default:
          return '#22252a';
      }
    }};
    color: ${({ look, theme }) => {
      switch (look) {
        case 'subscribe':
          return `${theme.colors.subscribeBtnColor}`;
        case 'rounded':
          return '#fafafa';
        case 'rounded_dark':
          return '#fafafa';
        case 'rounded_transparent':
          return '#8baa36';
        case 'rounded_other':
          return '#fafafa';
        case 'logout':
          return '#fafafa';
        case 'subscribe_dark':
          return '#8baa36';
        default:
          return '#22252a';
      }
    }};

    border: ${({ look }) => {
      switch (look) {
        case 'cancel':
          return '1px solid #23262a';
        case 'rounded_transparent':
          return '2px solid #8baa36';
        default:
          return 'none';
      }
    }};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${({ fsize }) => (fsize ? fsize : '16px')};
  line-height: 21px;
  text-decoration: none;

  color: ${({ look, theme }) =>
    look === 'cancel' || look === 'rounded_other'
      ? `${theme.colors.roundedOtherBtnColor}`
      : '#fafafa'};
  background-color: ${({ look, theme }) => {
    switch (look) {
      case 'subscribe':
        return `${theme.colors.subscribeBgColor}`;
      case 'subscribe_dark':
        return '#1E1F28';
      case 'rounded':
        return `${theme.colors.roundedBgColor}`;
      case 'rounded_dark':
        return `${theme.colors.roundedDarkBgColor}`;
      case 'rounded_transparent':
        return 'transparent';
      case 'rounded_other':
        return 'transparent';
      case 'logout':
        return '#8baa36';
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
    }
  }};
  border: ${({ look }) => {
    switch (look) {
      case 'rounded_transparent':
        return '2px solid #FAFAFA';
      case 'rounded_other':
        return '2px solid #8BAA36';
      default:
        return 'none';
    }
  }};
  border-radius: ${({ look }) => {
    switch (look) {
      case 'rounded':
        return '24px 44px';
      case 'rounded_dark':
        return '24px 44px';
      case 'rounded_transparent':
        return '24px 44px';
      case 'rounded_other':
        return '24px 44px';
      default:
        return '6px';
    }
  }};

  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  @media screen and (min-width: 768px) {
    width: ${({ width_tablet }) => width_tablet && width_tablet};
    height: ${({ heigth_tablet }) => heigth_tablet && heigth_tablet};

    font-size: ${({ fsize_tablet }) => (fsize_tablet ? fsize_tablet : '16px')};
    line-height: ${({ lineheight_tablet }) =>
      lineheight_tablet ? lineheight_tablet : '21px'};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ width_desktop }) => width_desktop && width_desktop};
    height: ${({ heigth_desktop }) => heigth_desktop && heigth_desktop};

    font-size: ${({ fsize_desktop }) =>
      fsize_desktop ? fsize_desktop : '16px'};
    line-height: ${({ lineheight_desktop }) =>
      lineheight_desktop ? lineheight_desktop : '21px'};
  }
  :hover,
  :focus {
    background-color: ${({ look, theme }) => {
      switch (look) {
        case 'subscribe':
          return `${theme.colors.subscribeBgColor}`;
        case 'subscribe_dark':
          return '#1E1F28';
        case 'rounded':
          return `${theme.colors.roundedBgHoverColor}`;
        case 'rounded_dark':
          return '#22252a';
        case 'rounded_transparent':
          return 'transparent';
        case 'rounded_other':
          return '#8baa36';
        case 'logout':
          return '#22252a';
        case 'cancel':
          return '#ffffff';
        default:
          return '#22252a';
      }
    }};
    color: ${({ look, theme }) => {
      switch (look) {
        case 'subscribe':
          return `${theme.colors.subscribeBtnColor}`;
        case 'rounded':
          return '#fafafa';
        case 'rounded_dark':
          return '#fafafa';
        case 'rounded_transparent':
          return '#8baa36';
        case 'rounded_other':
          return '#fafafa';
        case 'logout':
          return '#fafafa';
        case 'subscribe_dark':
          return '#8baa36';
        default:
          return '#22252a';
      }
    }};

    border: ${({ look }) => {
      switch (look) {
        case 'cancel':
          return '1px solid #23262a';
        case 'rounded_transparent':
          return '2px solid #8baa36';
        default:
          return 'none';
      }
    }};
  }
`;
