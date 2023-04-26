import styled from 'styled-components';
import { Field } from 'formik';
import Select from 'react-select';

export const FieldsetDesc = styled.fieldset`
  margin-bottom: 67px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
  }

  @media ${props => props.theme.device.desktop} {
    gap: 50px;
  }
`;

export const LabelFile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 270px;
  border-radius: 8px;
  outline: ${p =>
    p.isLoading ? `5px solid ${p.theme.colors.accentColor}` : 'none'};
  overflow: hidden;

  @media ${props => props.theme.device.desktop} {
    width: 357px;
    height: 344px;
  }
`;

export const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  opacity: 0;
  cursor: pointer;
`;

export const RemoveFileBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  background-color: transparent;
  border: none;
  z-index: 5;
  cursor: pointer;

  svg {
    fill: ${p => p.theme.colors.form.formIcon};
    width: 34px;
    height: 34px;

    &:hover,
    &:focus {
      fill: ${p => p.theme.colors.form.inputError};
    }
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media ${props => props.theme.device.tablet} {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const InputText = styled(Field)`
  padding: 0 10px;
  width: 100%;
  height: 40px;
  font-family: 'Poppins', sans-serif;
  font-size: ${p => `${p.theme.fontSizes.s}px`};
  line-height: 1.5;
  color: ${p => p.theme.colors.formAddInputText};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.formAddBorder};
  outline-color: ${p => p.theme.colors.form.formBottomLine};

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: ${p => p.theme.fontWeights.body};
    color: ${p => p.theme.colors.formAddPlaceholder};
    opacity: 0.9;
  }
  :focus::placeholder {
    opacity: 0;
  }

  @media ${props => props.theme.device.tablet} {
    height: 43px;
    &::placeholder {
      font-size: ${p => `${p.theme.fontSizes.sm}px`};
    }
  }
`;

export const DisabledInput = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.formAddBorder};

  @media ${props => props.theme.device.tablet} {
    height: 43px;
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${p => `${p.theme.fontSizes.s}px`};
  line-height: 1.5;
  color: ${p => p.theme.colors.formAddPlaceholder};

  @media ${props => props.theme.device.tablet} {
    font-size: ${p => `${p.theme.fontSizes.sm}px`};
  }
`;

export const StyledSelect = styled(Select)`
  width: 123px;
  font-size: ${p => `${p.theme.fontSizes.xs}px`};
  line-height: 1;

  svg {
    fill: ${p => p.theme.colors.accentColor};
  }

  &.сustom-select-container {
    position: absolute;
    right: 0;
    top: -8px;
    z-index: ${p => p.zIndex};
  }
  .сustom-select__control {
    border: none;
    background-color: transparent;
  }
  .сustom-select__control--menu-is-open {
    box-shadow: 0 0 0 3px ${p => p.theme.colors.form.formBottomLine};
  }
  .сustom-select__control--is-focused {
    box-shadow: 0 0 0 3px ${p => p.theme.colors.form.formBottomLine};
  }
  .сustom-select__indicator-separator {
    display: none;
  }
  .сustom-select__value-container {
    padding: 2px 0px 2px 14px;
  }
  .сustom-select__single-value {
    color: ${p => p.theme.colors.formAddInputText};
    text-align: right;
  }
  .сustom-select__menu {
    background-color: ${p => p.theme.colors.formAddSelectMenu};
  }
  .сustom-select__menu-list {
    max-height: 210px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${p => p.theme.colors.formAddScrollThumb};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${p => p.theme.colors.fromAddScrollTrack};
      border-radius: 5px;
    }
  }
  .сustom-select__option {
    font-size: ${p => `${p.theme.fontSizes.xs}px`};
    line-height: 1.5;
    color: ${p => p.theme.colors.fromAddSelectOption};
    opacity: 0.5;

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.accentColor};
      color: ${p => p.theme.colors.form.formIcon};
      opacity: 1;
    }
  }
  .сustom-select__option--is-selected {
    background-color: ${p => p.theme.colors.accentColor};
    color: ${p => p.theme.colors.form.formIcon};
    opacity: 1;
  }

  @media ${props => props.theme.device.tablet} {
    font-size: ${p => `${p.theme.fontSizes.s}px`};

    .сustom-select__option {
      font-size: ${p => `${p.theme.fontSizes.s}px`};
    }
  }
`;
