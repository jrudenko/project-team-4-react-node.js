import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  padding: 4px 0;
  display: flex;
  align-items: center;
  border: 1px solid ${p => p.theme.colors.formAddCounterBorder};
  border-radius: 18px;
  overflow: hidden;

  @media ${props => props.theme.device.tablet} {
    top: -58px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 14px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: ${p =>
      p.value <= 1
        ? p.theme.colors.formAddCounterBorder
        : p.theme.colors.formAddCounterBtn};
    width: 14px;
    height: 14px;
  }
`;

export const Value = styled.span`
  font-size: ${p => `${p.theme.fontSizes.s}px`};
  line-height: 1.2;
  color: ${p => p.theme.colors.formAddInputText};

  @media ${props => props.theme.device.tablet} {
    font-size: ${p => `${p.theme.fontSizes.sm}px`};
  }
`;
