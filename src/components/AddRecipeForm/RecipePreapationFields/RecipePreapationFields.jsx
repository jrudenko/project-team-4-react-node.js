import PropTypes from 'prop-types';
import { FormErrorMsg } from '../FormErrorMsg/FormErrorMsg';
import { Ingredients } from '../Ingredients/Ingredients.styled';
import { FieldsetPreparation, Textarea } from './RecipePreapationFields.styled';

export const RecipePreapationFields = ({ setFieldValue }) => {
  const handleTextareaBlur = e => {
    const preparation = e.target.value.split('\n').filter(Boolean);
    setFieldValue('preparation', preparation);
  };

  return (
    <FieldsetPreparation>
      <Ingredients>Recipe Preparation</Ingredients>
      <Textarea
        as="textarea"
        name="preparation"
        onBlur={handleTextareaBlur}
        placeholder="Enter recipe"
      />
      <FormErrorMsg name="preparation" position="left" />
    </FieldsetPreparation>
  );
};

RecipePreapationFields.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
};
