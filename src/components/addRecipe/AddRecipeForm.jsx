import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SelectComponent from './component/Select/Select';
import ImageUploadField from './inputImage';

const AddRecipe = () => {


  
  const initialValues = {
    title: '',
    description: '',
    category: '',
    time: '',
    ingredients: [],
    instructions: '',
    image: null,
    imagePreviewUrl: null,
  };

  const onSubmit = values => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    time: Yup.number().required('Time is required'),
    ingredients: Yup.array().min(1, 'At least 1 ingredient is required'),
    instructions: Yup.string().required('Instructions are required'),
  });

  const categoryOptions = [
    'Appetizers',
    'Breakfast',
    'Lunch',
    'Dinner',
    'Desserts',
    'Drinks',
  ];

  const timeOptions = [];
  for (let i = 5; i <= 120; i += 5) {
    timeOptions.push(i);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => (
        <Form>
          
            <ImageUploadField
              field={{ name: 'image', value: values.image }}
              form={{ setFieldValue, values }}
            />
          
          
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" placeholder="Enter title" />
            <ErrorMessage name="title" component="div" />
          
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              placeholder="Enter description"
            />
            <ErrorMessage name="description" component="div" />
          
            <label htmlFor="category">Category</label>
            <SelectComponent
              id="category"
              name="category"
              options={categoryOptions}
            />
          
            <label htmlFor="time">Time</label>
            <SelectComponent id="time" name="time" options={timeOptions} />
          
            <label htmlFor="ingredients">Ingredients</label>
            <FieldArray name="ingredients">
              {({ push, remove }) => (
                <div>
                  {values.ingredients.map((_, index) => (
                    <div key={index}>
                      <Field name={`ingredients[${index}].name`} />
                      <Field name={`ingredients[${index}].quantity`} />
                      <Field name={`ingredients[${index}].unit`} />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push({})}>
                    Add ingredient
                  </button>
                </div>
              )}
            </FieldArray>
          
          
            <label htmlFor="instructions">Instructions</label>
            <Field
              as="textarea"
              id="instructions"
              name="instructions"
              placeholder="Enter instructions"
            />
          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddRecipe;
