import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { SelectWrapper } from './SelectComponentWithFilter.styled';

const SelectComponentWithFilter = ({ name, data, ...props }) => {
  const [, , helpers] = useField(name);

  const handleChange = selectedOption => {
    helpers.setValue(selectedOption.value);
  };

  return (
    <SelectWrapper>
      <Select
        className="basic-single"
        classNamePrefix="react-select"
        onChange={handleChange}
        name={name}
        options={data}
        {...props}
      />
    </SelectWrapper>
  );
};

export default SelectComponentWithFilter;
