import { useState } from 'react';
import { FieldArray } from 'formik';
import { Counter } from './Counter/Counter';
import { FormErrorMsg } from '../FormErrorMsg/FormErrorMsg';
import { RxCross2 } from 'react-icons/rx';
import {
  FieldsetIngredients,
  Label,
  SelectIngredients,
  SelectMeasure,
  InputText,
  LabelMeasure,
  Container,
  ContainerError,
  RemoveFieldsButton,
} from './RecipeIngredientsFields.styled';
import { Ingredients } from '../Ingredients/Ingredients.styled';

export const RecipeIngredientsFields = ({
  optionsIngredients,
  optionMesure,
  values,
}) => {
  const [fieldsValue, setFieldsValue] = useState(1);

  const handleIncrement = push => {
    setFieldsValue(pS => pS + 1);
    push({ quantity: '', measure: 'tbs', id: '' });
  };
  const handleDecrement = pop => {
    if (fieldsValue <= 0) return;
    setFieldsValue(pS => pS - 1);
    pop({ quantity: '', measure: 'tbs', id: '' });
  };
  const removeFieldsBtn = (remove, idx) => {
    remove(idx);
    setFieldsValue(pS => pS - 1);
  };

  return (
    <FieldsetIngredients>
      <Ingredients>Ingredients</Ingredients>

      <FieldArray name="ingredients">
        {({ push, pop, remove }) => (
          <>
            {values.ingredients.map((ingredient, idx) => (
              <Container key={idx}>
                <Label>
                  <SelectIngredients
                    name={`ingredients.${idx}.id`}
                    className="сustom-select-container"
                    classNamePrefix="сustom-select"
                    isClearable={true}
                    isSearchable={true}
                    options={optionsIngredients}
                    onChange={option => {
                      if (!option) return;
                      values.ingredients[idx].id = option.value;
                    }}
                    placeholder="Choose an ingredient..."
                    noOptionsMessage={() => 'No ingredient'}
                  />
                  <ContainerError>
                    <FormErrorMsg
                      name={`ingredients.${idx}.id`}
                      position="left"
                    />
                    <FormErrorMsg
                      name={`ingredients.${idx}.quantity`}
                      position="left"
                    />
                  </ContainerError>
                </Label>
                <LabelMeasure>
                  <SelectMeasure
                    name={`ingredients.${idx}.measure`}
                    className="сustom-select-container"
                    classNamePrefix="сustom-select"
                    defaultValue={optionMesure.find(
                      ({ value }) => value === ingredient.measure
                    )}
                    isSearchable={false}
                    options={optionMesure}
                    onChange={option => {
                      if (!option) return;
                      return (values.ingredients[idx].measure = option.value);
                    }}
                    placeholder=""
                    idx={idx}
                  />
                  <InputText
                    type="text"
                    autoComplete="off"
                    name={`ingredients.${idx}.quantity`}
                  />
                </LabelMeasure>
                <RemoveFieldsButton
                  type="button"
                  aria-label="delete-field"
                  onClick={() => removeFieldsBtn(remove, idx)}
                >
                  <RxCross2 />
                </RemoveFieldsButton>
              </Container>
            ))}
            <Counter
              value={fieldsValue}
              handleIncrement={() => handleIncrement(push)}
              handleDecrement={() => handleDecrement(pop)}
            />
          </>
        )}
      </FieldArray>
    </FieldsetIngredients>
  );
};

RecipeIngredientsFields.propTypes = {};
