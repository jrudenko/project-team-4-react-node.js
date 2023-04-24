import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 16px 120px 16px 32px;
  width: 295px;
  height: 53px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 12px;
  line-height: ${p => p.theme.searchSelect};
  color: #3e4462;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  background-color: ${p => p.theme.colors.whiteText};

  @media screen and (min-width: 768px) {
    padding: 19px 180px 16px 38px;
    width: 362px;
    height: 57px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 180px 20px 48px;
    width: 510px;
    height: 70px;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    background-color: ${p => p.theme.colors.white};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  width: 113px;
  height: 53px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 14px;
  line-height: ${p => p.theme.searchSelect};
  color: ${p => p.theme.colors.button.textColorMain};
  background-color: ${p => p.theme.colors.button.secondaryBag};
  border-radius: 24px 44px;
  transform: translate(-100%);

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    height: 70px;
  }

  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.button.primaryBag};
  }
`;
