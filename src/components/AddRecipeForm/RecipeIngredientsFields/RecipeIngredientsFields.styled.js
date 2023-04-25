import styled from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';

export const FieldsetIngredients = styled.fieldset`
  position: relative;
  margin-bottom: 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;

  @media ${props => props.theme.device.desktop} {
    width: 609px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media ${props => props.theme.device.tablet} {
    gap: 0;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const ContainerError = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 55px;
`;

export const Label = styled.label`
  position: relative;
  flex-grow: 1;

  @media ${props => props.theme.device.tablet} {
    flex-grow: 0;
    margin-right: 32px;
    width: 400px;
  }
`;

export const LabelMeasure = styled.div`
  position: relative;
  display: flex;
`;

export const SelectIngredients = styled(Select)`
  svg {
    fill: ${p => p.theme.colors.accentColor};
  }
  &.сustom-select-container {
    border: 1px solid ${p => p.theme.colors.formAddSelectIngr};
    border-radius: 6px;
  }
  .сustom-select__control {
    background-color: ${p => p.theme.colors.formAddSelectIngrBg};
    border: none;
  }
  .сustom-select__control--menu-is-open {
    box-shadow: 0 0 0 3px ${p => p.theme.colors.form.formBottomLine};
  }
  .сustom-select__control--is-focused {
    box-shadow: 0 0 0 3px ${p => p.theme.colors.form.formBottomLine};
  }
  .сustom-select__dropdown-indicator,
  .сustom-select__indicator-separator {
    display: none;
  }
  .сustom-select__value-container {
    padding: 16px;
  }
  .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.formAddPlaceholder};
  }
  .сustom-select__single-value {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.formAddInputText};
  }
  .сustom-select__input {
    font-size: ${p => `${p.theme.fontSizes.s}px`};
    line-height: 1.5;
    letter-spacing: -0.02em;

    @media ${props => props.theme.device.tablet} {
      font-size: ${p => `${p.theme.fontSizes.m}px`};
    }
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
    .сustom-select__single-value {
      font-size: ${p => `${p.theme.fontSizes.sm}px`};
    }
    .сustom-select__option {
      font-size: ${p => `${p.theme.fontSizes.s}px`};
    }
    .сustom-select__placeholder {
      font-size: ${p => `${p.theme.fontSizes.sm}px`};
    }
  }

  @media ${props => props.theme.device.desktop} {
    .сustom-select__dropdown-indicator {
      display: block;
      padding: 13px 18px 8px 8px;
    }
  }
`;

export const SelectMeasure = styled(Select)`
  width: 70px;

  svg {
    fill: ${p => p.theme.colors.accentColor};
  }
  &.сustom-select-container {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: ${p => `${100 - p.idx}`};
  }
  .сustom-select__control {
    background-color: transparent;
    border: none;
  }
  .сustom-select__control--menu-is-open {
    box-shadow: none;
  }
  .сustom-select__control--is-focused {
    box-shadow: none;
  }
  .сustom-select__indicator {
    padding: 8px 8px 8px 0;
  }
  .сustom-select__clear-indicator,
  .сustom-select__indicator-separator {
    display: none;
  }
  .сustom-select__value-container {
    padding: 16px 3px 16px 3px;
  }
  .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
    font-size: ${p => `${p.theme.fontSizes.s}px`};
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.formAddPlaceholder};
  }
  .сustom-select__single-value {
    font-size: ${p => `${p.theme.fontSizes.s}px`};
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.formAddInputText};
  }
  .сustom-select__menu {
    left: -47px;
    width: 118px;
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
    padding: 8px 12px 8px 50px;
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
    .сustom-select__single-value {
      font-size: ${p => `${p.theme.fontSizes.sm}px`};
    }
    .сustom-select__option {
      font-size: ${p => `${p.theme.fontSizes.s}px`};
    }
  }
`;

export const InputText = styled(Field)`
  padding: 16px;
  width: 118px;
  line-height: 1.2;
  color: ${p => p.theme.colors.formAddInputText};
  background-color: ${p => p.theme.colors.formAddSelectIngrBg};
  border: 1px solid ${p => p.theme.colors.formAddSelectIngr};
  border-radius: 6px;
  outline-color: ${p => p.theme.colors.form.formBottomLine};

  @media ${props => props.theme.device.tablet} {
    font-size: ${p => `${p.theme.fontSizes.sm}px`};
  }
`;

export const RemoveFieldsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${p => p.theme.colors.formAddIngrBtn};
    fill: ${p => p.theme.colors.formAddIngrBtn};
    width: 18px;
    height: 18px;
  }

  @media ${props => props.theme.device.tablet} {
    margin-left: auto;
  }
`;
