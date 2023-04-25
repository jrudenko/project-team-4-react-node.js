import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategory,
  selectError,
  selectIngredients,
  selectIsLoading,
} from 'redux/addRecipe/addRecipeSelectors';
import {
  getCategoryList,
  getIngredientsList,
  addRecipe,
} from 'redux/addRecipe/addRecipeOperation';
import { Formik } from 'formik';
import {
  createOptionCategory,
  createOptionTimes,
  createOptionMeasure,
  createOptionIngredients,
} from '../../redux/helpers/createOptionsSelectAddRecipeForm';
import { validationSchema } from '../../redux/helpers/validationSchemaAddRecipeForm';
import { Loader } from 'components/Loader/Loaders';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreapationFields } from './RecipePreapationFields/RecipePreapationFields';
import Button from '../../components/Button/Button';
import { ShowToastError } from '../../redux/helpers/showToastError';
import { createArrTimesPrepare } from '../../redux/helpers/createArrTimesPrepare';
import { RecipeForm } from './AddRecipeForm.styled';
import placeholderNoUserImg from 'images/recipepage/placeholder-meal.jpg';

const initialValues = {
  file: '',
  title: '',
  about: '',
  category: 'breakfast',
  time: '40',
  ingredients: [{ quantity: '', measure: 'tbs', id: '' }],
  preparation: [],
};

export const AddRecipeForm = props => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectCategory);
  const ingredientsListAll = useSelector(selectIngredients);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [submitRecipe, setSubmitRecipe] = useState(false);

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getIngredientsList());
  }, [dispatch]);

  const optionsCategory = createOptionCategory(categoryList);
  const optionsTimes = createOptionTimes(createArrTimesPrepare(5, 120, 5));
  const optionsIngredients = createOptionIngredients(ingredientsListAll);
  const optionMesure = createOptionMeasure();

  const handleSubmit = async (values, actions) => {
    const { file, title, about, category, time, ingredients, preparation } =
      values;
    const instructions = preparation.join('\n');
    const ingredientsList = ingredients.flatMap(item => {
      return ingredientsListAll.reduce((acc, ingr) => {
        if (item.id === ingr._id) {
          acc.id = ingr._id;
          acc.measure = `${item.quantity} ${item.measure}`;
          acc.thumb = ingr.thb;
          acc.title = ingr.ttl;
          acc.desc = ingr.desc;
        }
        return acc;
      }, {});
    });

    const res = await fetch(placeholderNoUserImg);
    const blob = await res.blob();
    const fileName = placeholderNoUserImg.split('/').pop();
    const placeholder = new File([blob], fileName, { type: blob.type });

    const preview = file === '' ? placeholder : file;

    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', about);
    formData.append('instructions', instructions);
    formData.append('favorite', false);
    formData.append('preview', preview);
    formData.append('time', time);
    formData.append('ingredients', JSON.stringify(ingredientsList));

    dispatch(addRecipe(formData))
      .unwrap()
      .then(() => setSubmitRecipe(true))
      .catch(() => <ShowToastError msg="Failed to send recipe" />);
    actions.resetForm();
  };

  if (submitRecipe) {
    return <Navigate to="/my" replace />;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
          <RecipeForm>
            <RecipeDescriptionFields
              setFieldValue={setFieldValue}
              values={values}
              optionsCategory={optionsCategory}
              optionsTimes={optionsTimes}
            />
            <RecipeIngredientsFields
              optionsIngredients={optionsIngredients}
              optionMesure={optionMesure}
              values={values}
            />
            <RecipePreapationFields setFieldValue={setFieldValue} />
            <Button
              type="submit"
              look="rounded"
              width="129px"
              widthTablet="161px"
              heigthTablet="52px"
              heigth="46px"
              fontSize="16px"
              lineHeight="24px"
            >
              {isLoading ? <Loader size="30" /> : 'Add'}
            </Button>
          </RecipeForm>
        )}
      </Formik>
      {error && <ShowToastError msg="Something went wrong" />}
    </>
  );
};

AddRecipeForm.propTypes = {};
