import React from 'react';
import { useField, Field } from 'formik';



 const SelectComponent = ({ label, options, ...props }) => {
   const [field, meta] = useField(props);


   return (
     <>
       <label>
         {label}
         <Field as="select" {...field} {...props}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Field>
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 }


export default SelectComponent;
