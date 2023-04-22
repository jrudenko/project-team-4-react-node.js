import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .react-select-container {
    width: 100%;
  }

  .react-select__control {
    border-radius: 4px;
    border: none;
    font-size: 1rem;
    min-height: 38px;
    width: 200px;
    &:hover {
      background-color: #f1f1f1;
    }
  }

  .react-select__value-container {
    padding: 0 10px;
  }

  .react-select__single-value {
    color: #333;
  }

  .react-select__placeholder {
    color: #aaa;
  }

  .react-select__menu {
    margin-top: 0;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .react-select__option {
    font-size: 1rem;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }

  .react-select__option--is-selected {
    background-color: #0074d9;
    color: #fff;
  }

  .react-select__option--is-focused {
    background-color: #f1f1f1;
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }
`;
