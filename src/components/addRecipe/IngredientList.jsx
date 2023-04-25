import { Field, FieldArray, useFormikContext } from "formik";

function IngredientList() {
  const { values } = useFormikContext(); // get values, push, and remove from Formik context
  // const { values, push, remove } = useFormikContext();const { values, push, remove } = useFormikContext();
  return (
    <FieldArray name="ingredients">
      {({ push, remove }) => (
        <div>
          {values.ingredients.map((ingredient) => (
            <div key={ingredient.id}>
              <Field name={`ingredients.${ingredient.id}.name`} />
              <Field name={`ingredients.${ingredient.id}.quantity`} />
              <Field name={`ingredients.${ingredient.id}.unit`} />
              <button type="button" onClick={() => remove(ingredient)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => push({ id: values.ingredients.length, name: "", quantity: 0, unit: "" })}
          >
            Add ingredient
          </button>
        </div>
      )}
    </FieldArray>
  );
}

export default IngredientList;