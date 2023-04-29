import styled from 'styled-components';

export const ShoppingItem = styled.li`
  padding-top: 25px;
  padding-bottom: 23px;
  border-bottom: 1px solid #e0e0e0;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    padding-top: 45px;
    padding-bottom: 42px;
    padding-right: 50px;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: flex-start;
  }
`;

export const Descriptions = styled.div`
  display: flex;
  & p {
    margin-left: 10px;
    font-weight: 500;
    font-size: ${p => p.theme.fontSizes.xxs}px;
    line-height: 1.2;
    color: ${p => p.theme.colors.primaryText};
    @media screen and (min-width: 768px) {
      margin-left: 16px;
      font-size: ${p => p.theme.fontSizes.sm}px;
      line-height: 1.5;
    }
  }
`;

export const ImageItem = styled.img`
  padding: 6px;
  height: auto;
  width: 60px;
  background: ${p => p.theme.colors.shoppingItemImageBg};
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 93px;
  }
`;

export const Bage = styled.div`
  padding: 4px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  min-width: 37px;
  height: auto;
  background: ${p => p.theme.colors.colorAccent};
  border-radius: 4px;
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xxs}px;
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteText};
  @media screen and (min-width: 768px) {
    min-width: 68px;
    font-size: ${p => p.theme.fontSizes.m}px;
  }
`;

export const CloseButton = styled.button`
  padding: 0;
  width: 40px;
  height: 40px;
  margin-top: -8px;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 30px;
  color: ${p => p.dark ? '#FAFAFA' : '#333333'};
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorAccent};
  }
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 170px;
  }
`;
