import React from 'react';
import { Field, useField } from 'formik';
import StyledSelect from './Select.styled';

const SelectWithAmount = ({ options, name, value, ...props }) => {
  const [, , helpers] = useField(name);
  return (
    <Field name={name}>
      {({ field, form }) => (
        <StyledSelect
          className="select__control"
          classNamePrefix="react-select"
          options={options}
          name={field.name}
          onChange={selectedOption => {
            helpers.setValue(selectedOption.value);
          }}
          value={value}
          isOptionSelected={option => option.label === value?.label}
          {...props}
        />
      )}
    </Field>
  );
};

export default SelectWithAmount;
