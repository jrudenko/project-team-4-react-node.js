import styled from 'styled-components';
import { ReactComponent as envelope } from '../../images/SVG/envelope.svg';
// import { Field } from 'formik';


export const SubForm = styled.form`
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    flex-direction: column;
    gap: 28px;
  }
`;
export const TextFrame = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${p => p.theme.colors.footerText};
`;

export const SubText = styled.p`
  width: 339px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.footerText};
`;

export const FormFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;

  }
`;

export const InputBox = styled.div`
  padding-left: 14px;
  border: 1px solid rgb(250, 250, 250, 0.16);
  border-radius: 6px;
  width: 204px;
  height: 38px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${p => p.theme.colors.inputBg};
  @media (min-width: 768px) {
    width: 259px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 338px;
    height: 59px;
  }
`;
export const SubInput = styled.input`
  border: none;
  width: 100%;
  height: 36px;
  background-color: ${p => p.theme.colors.inputBg};
  color: ${p => p.theme.colors.footerText};
  :focus{
    outline:none;
  }
  letter-spacing: -0.02em;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  @media (min-width: 768px) {
    height: 48px;
   font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  }
  @media (min-width: 1440px) {
    height: 56px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;

  }
  &::placeholder {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.footerText};

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const InputIcon = styled(envelope)`
  color: ${p => p.theme.colors.footerText};
  width: 16px;
  height: 12px;
  @media (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
`;


export const FormBtn = styled.button`
width: 204px;
height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};

  transition: 5s;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${({ fsize }) => (fsize ? fsize : '16px')};
  line-height: ${({ lineheight }) => (lineheight ? lineheight : '21px')};
  cursor: pointer;
  color: ${({ look, theme }) =>
    look === 'cancel' || look === 'rounded_other'
      ? `${theme.colors.roundedOtherBtnColor}`
      : '#FAFAFA'};
  background-color: ${({ look, theme }) => {
    switch (look) {
      case 'subscribe':
        return `${theme.colors.subscribeBgColor}`;
      case 'subscribe_dark':
        return '#1E1F28';
      case 'rounded':
        return `${theme.colors.roundedBgColor}`;
      case 'rounded_dark':
        return `#8BAA36`;
      case 'rounded_transparent':
        return 'transparent';
      case 'rounded_other':
        return 'transparent';
      case 'logout':
        return `${theme.colors.colorAccent}`;
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
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

    width: 171px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 339px;
     height: 60px;

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
  }
`;
