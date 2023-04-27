import styled from 'styled-components';
import { ReactComponent as envelope } from '../../images/SVG/envelope.svg';

export const SubForm = styled.form`
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
  color: ${p => p.theme.colors.whiteText};
`;

export const SubText = styled.p`
  width: 339px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteText};
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
  flex-direction: row;
  align-items: center;
  gap: 12px;
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
  text-decoration: none;
  width: 148px;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border:none;
  background-color: ${p => p.theme.colors.button.secondaryBag};
  color: ${p => p.theme.colors.whiteText};
  @media (min-width: 768px) {
    width: 168px;
    height: 21px;
  }
  @media (min-width: 1440px) {
    width: 216px;
    height: 24px;
  }
  &::placeholder {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.whiteText};
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
  color: ${p => p.theme.colors.whiteText};
  width: 16px;
  height: 12px;
  @media (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
`;

export const SubButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 71px;
  gap: 8px;

  width: 204px;
  height: 38px;
  color: ${p => p.theme.colors.button.textColorMain};
  background: ${p => p.theme.colors.button.primaryBag};
  border-radius: 6px;
  &:hover {
    color: ${p => p.theme.colors.button.hoverTextColorMain};
  }

  @media (min-width: 768px) {
    padding: 16px 50px;
    width: 171px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    padding: 21px 138px;

    width: 339px;
    height: 60px;
  }
`;
