import React, { useEffect, useState } from 'react';
import { Field, useField, FieldArray } from 'formik';
import SelectComponentWithFilter from './Select/SelectComponentWithFilter/SelectComponentWithFilter';
import SelectWithAmount from './Select/SelectWithAmount';

const unitOptions = [
  { value: 'kg', label: 'кг' },
  { value: 'lb', label: 'фунт' },
  { value: 'oz', label: 'унция' },
];
const IngredientComponent = ({ name, label, ingredients, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const [counter, setCounter] = useState(field.value.length || 1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const initialArray = [...field.value];
    if (initialArray.length < counter) {
      initialArray.push({ name: '', amount: '' });
      helpers.setValue(initialArray);
    }
    if (initialArray.length >= counter) {
      initialArray.splice(counter - 1);
      helpers.setValue(initialArray);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h3>Ingridients</h3>
        <div style={{ display: 'flex', marginLeft: '10px' }}>
          <button
            type="button"
            onClick={() => setCounter(Math.max(counter - 1, 1))}
          >
            -
          </button>
          <p>{counter - 1}</p>
          <button type="button" onClick={() => setCounter(counter + 1)}>
            +
          </button>
        </div>
      </div>

      <FieldArray
        name={name}
        render={({ insert, remove, push }) => (
          <div>
            {field.value.slice(0, counter).map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                }}
              >
                {label && <label htmlFor={name}>{label}</label>}
                <SelectComponentWithFilter
                  name={`${name}.${index}.name`}
                  data={ingredients}
                  label="Colors"
                />
                {label && <label htmlFor={name}>{label}</label>}
                <Field name={`${name}.${index}.amount`} type="number" />

                {label && <label htmlFor={name}></label>}
                <SelectWithAmount
                  name={`${name}.${index}.unit`}
                  options={unitOptions}
                  index={index}
                />
                <button
                  type="button"
                  onClick={() => {
                    remove(index);
                    setCounter(Math.max(counter - 1, 1));
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
          </div>
        )}
      />
    </div>
  );
};

export default IngredientComponent;
