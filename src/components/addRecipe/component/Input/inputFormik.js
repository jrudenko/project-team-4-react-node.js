import React from 'react';
import { useField, Field } from 'formik';
import { DivLabelStyled } from './Input.styled';

const InputComponent = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <DivLabelStyled>
        <label>
          {props.titletext}
          <Field as="input" type="text" {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </DivLabelStyled>
    </>
  );
};

export default InputComponent;
