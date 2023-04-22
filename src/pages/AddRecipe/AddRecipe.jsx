import InputComponent from 'components/addRecipe/component/Input/inputFormik';
import Title from '../../components/Title/Title';
import SelectComponent from '../../components/addRecipe/component/Select/Select';
import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import IngridientComponent from 'components/addRecipe/component/Ingridient';
import FormikTextArea from 'components/addRecipe/component/Textarea';
import fetchCategoryListFromAPI from 'pages/Categories/Axios/AxiosGetCategories';
import fetchIngridients from './Fetch/FetchIngridients';
import * as Yup from 'yup';

const initialValues = {
    photo: '',
          title: '',
          description: '',
          category: '',
          time: '',
          ingredients: [],
          instructions: '',
          image: null,
          imagePreviewUrl: null,
  };

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    time: Yup.number().required('Time is required'),
    ingredients: Yup.array().min(1, 'At least 1 ingredient is required'),
    instructions: Yup.string().required('Instructions are required'),
  });

const AddRecipe = () => {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const optionsTime = [];
  for (let i = 5; i <= 120; i += 5) {
    optionsTime.push(i);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await fetchCategoryListFromAPI();
        console.log(categoryData.categoryList);
        setCategories(categoryData.categoryList);

        const ingredientData = await fetchIngridients();
        console.log(ingredientData.ingredientList);
        setIngredients(ingredientData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Title>Add Recipe</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {props => (
          <Form>
            <div
              style={{
                width: '300px',
                height: '300px',
                backgroundColor: 'grey',
              }}
            ></div>
            <div>
              <InputComponent
                name="title"
                label="title"
                titletext="Enter item title"
              />
              <InputComponent
                name="description"
                label="description"
                titletext="Enter item description"
              />
              <SelectComponent
                name="category"
                options={categories}
                label="category"
              />
              <SelectComponent name="time" options={optionsTime} label="time" />
            </div>
            <IngridientComponent
              label="ingredients"
              name="ingredients"
              ingredients={ingredients}
            />

            <FormikTextArea label="instructions" name="instructions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddRecipe;
