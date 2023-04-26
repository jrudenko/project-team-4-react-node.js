import styled from 'styled-components';

export const Wrapper = styled.div`
padding: 420px 0 50px 0;
  @media ${props => props.theme.device.tablet} {
    padding: 540px 0 96px 0;
  }
  @media ${props => props.theme.device.desktop} {
    padding: 570px 0 96px 0;
  }
`; 

export const TableData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 12px 14px;
  background-color: ${p => p.theme.colors.colorAccent};
  border-radius: 8px;
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 32px;
    padding: 21px 32px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-bottom: 50px;
    padding: 21px 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.whiteText};
  &:not(:last-child) {
    margin-right: 18px;
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
    &:not(:last-child) {
      margin-right: 38px;
    }
  }
  @media ${props => props.theme.device.desktop} {
    &:not(:last-child) {
      margin-right: 110px;
    }
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;
  background-color: ${p => p.theme.colors.pageRecipeItemIngBg};
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  @media ${props => props.theme.device.tablet} {
    padding: 33px 58px 33px 40px;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media ${props => props.theme.device.desktop} {
    padding: 27px 70px 27px 58px;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const RecipeImage = styled.img`
  width: 57px;
  height: 57px;
  @media ${props => props.theme.device.tablet} {
    width: 112px;
    height: 112px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 128px;
    height: 128px;
  }
`;

export const IngredientTitle = styled.p`
  margin-left: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: -0.24px;
  white-space: pre-wrap;
  color: ${p => p.theme.colors.primaryText};
  @media ${props => props.theme.device.tablet} {
    margin-left: 24px;
    font-size: 24px;
    line-height: 1;
  }
  @media ${props => props.theme.device.desktop} {
    margin-left: 40px;
  }
`;

export const MeasureInfo = styled.div`
  margin-right: 28px;
  padding: 4px 8px;
  min-width: 62px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteText};
  background-color: ${p => p.theme.colors.colorAccent};
  border-radius: 8px;
  @media ${props => props.theme.device.tablet} {
    margin-right: 78px;
    font-size: 18px;
    min-width: 70px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-right: 151px;
    min-width: 68px;
  }
`;

export const ContainerCheckbox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  &:checked + span > svg {
    display: block;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid ${p => p.theme.colors.pageRecipeCheckboxBorder};
  border-radius: 4px;
  transition: transform 250ms linear;
  pointer-events: none;
  svg {
    display: none;
    fill: ${p => p.theme.colors.accentColor};
    color: ${p => p.theme.colors.accentColor};
    width: 13px;
    height: 13px;
  }
  @media ${props => props.theme.device.tablet} {
    width: 35px;
    height: 35px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Box = styled.div`
display: flax;
align-items: center;
`;