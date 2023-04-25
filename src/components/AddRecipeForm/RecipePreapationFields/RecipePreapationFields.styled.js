import styled from 'styled-components';
import { Field } from 'formik';

export const FieldsetPreparation = styled.fieldset`
  margin-bottom: 18px;
  padding: 0;
  border: none;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 32px;
  }
`;

export const Textarea = styled(Field)`
  padding: 10px 16px;
  height: 154px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: ${p => `${p.theme.fontSizes.s}px`};
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.formAddInputText};
  background-color: ${p => p.theme.colors.formAddTextarea};
  outline-color: ${p => p.theme.colors.form.formBottomLine};
  border: 1px solid ${p => p.theme.colors.formAddSelectIngr};
  border-radius: 6px;
  resize: none;

  &::placeholder {
    font-size: ${p => `${p.theme.fontSizes.s}px`};
    line-height: 1.5;
  }

  @media ${props => props.theme.device.tablet} {
    padding: 16px 22px;
    width: 550px;
    height: 224px;
    font-size: ${p => `${p.theme.fontSizes.sm}px`};

    &::placeholder {
      font-size: ${p => `${p.theme.fontSizes.sm}px`};
    }
  }
  @media ${props => props.theme.device.desktop} {
    font-size: ${p => `${p.theme.fontSizes.m}px`};
    &::placeholder {
      font-size: ${p => `${p.theme.fontSizes.m}px`};
    }
  }
`;
