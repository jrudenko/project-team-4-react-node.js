import React from 'react';
import { Field, useField } from 'formik';

const FormikTextArea = ({ label, name, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const handleBlur = () => {
    const text = field.value;
    const lines = text.split('\n');
    const numberedLines = lines.map((line, index) => `${index + 1}. ${line}`);
    helpers.setValue(numberedLines.join(' '));
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        as="textarea"
        name={name}
        {...rest}
        value={field.value}
        onBlur={handleBlur}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default FormikTextArea;
