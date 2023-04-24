import styled from 'styled-components';

export const BoxSelector = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    height: 41px;
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    height: 47px;
  }
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: 12px;
  line-height: ${p => p.theme.content};
  color: ${p => p.theme.colors.titleConteiner};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Select = styled.select`
  width: 146px;
  height: 100%;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 12px;
  line-height: ${p => p.theme.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.black};
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background-color: ${p => p.theme.colors.grey};
  cursor: pointer;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    width: 175px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 198px;
  }

  &:focus {
    outline: none;
    background-color: ${p => p.theme.colors.white};
  }
`;
