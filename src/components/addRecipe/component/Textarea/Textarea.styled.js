import { Field } from 'formik';
import styled from 'styled-components';

export const TitleTextareaStyled = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #3e4462;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FieldTextareaStyled = styled(Field)`
  border: none;
  background-color: inherit;
`;
