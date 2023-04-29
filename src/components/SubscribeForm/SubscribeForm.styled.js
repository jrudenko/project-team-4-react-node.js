import styled from 'styled-components';
import { ReactComponent as envelope } from '../../images/SVG/envelope.svg';
import { Field } from 'formik';


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
export const SubInput = styled(Field)`
  border: none;
  width: 100%;
  height: 36px;
  background-color: ${p => p.theme.colors.inputBg};
  color: ${p => p.theme.colors.footerText};
  :focus{
    outline:none;
  }
  @media (min-width: 768px) {
    height: 48px;
  }
  @media (min-width: 1440px) {
    height: 56px;
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

