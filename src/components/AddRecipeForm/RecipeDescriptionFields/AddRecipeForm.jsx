import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from 'yup';

const AddRecipeSchema = Yup.object({
  itemTitle: Yup.string().min(5).required(),
  aboutRecipe: Yup.string().required(),
  category: Yup.string().required(),
  cookingTime: Yup.string().required(),
})

const initialValues = {
  itemTitle: '',
  aboutRecipe: '',
  category: '',
  cookingTime: '',
}

const categories = ['Soup', 'Goat', 'Lamb', 'Beef', 'Miscellaneous', 'Pasta', 'Breakfast',
'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Chicken','Dessert']

const cookingTimes = ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min', '35 min', '40 min', '45 min',
'50 min', '55 min', '60 min', '65 min', '70 min', '75 min', '80 min', '85 min', '90 min', '95 min', '100 min', '105 min',
'115 min', '120 min']



const Input = styled(Field)`
font-size: 40px;`;

const AddRecipeForm = () => {

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} validationSchema={AddRecipeSchema} onSubmit={handleSubmit}>
      <Form autoComplete="off">
          <label htmlFor="itemTitle">
            <Input        
              type="text"
              name="itemTitle"     
              placeholder="Enter item title"
            />
            <ErrorMessage  name="itemTitle" component="div" />
          </label>
          <label htmlFor="aboutRecipe">
            <Input       
              type="text"
              name="aboutRecipe"            
              placeholder="Enter about recipe"
            />
            <ErrorMessage  name="aboutRecipe" component="div"/>
          </label>

                

          <label htmlFor="category">
            <Input        
              type="text"
              name="category"                
              placeholder="Category"
            />

            <div>
                    <label htmlFor="category">Category</label>
                       <div>
                        <Field name='categories' as="select">
                          <option value="">Select a Categories</option>
                          {categories.map((category, idx) => (
                            <option value={category} key={idx}>
                              {category}
                            </option>
                          ))}

                        </Field>
                        <ErrorMessage  name="categories" component="div"/>
                       </div>
            </div>

            <ErrorMessage  name="category" component="div"/>
          </label>

          <label htmlFor="cookingTime">
            <Input        
              type="text"
              name="cookingTime"                  
              placeholder="Cooking time"
            />

            <div>
                    <label htmlFor="cookingTime">CookingTime</label>
                       <div>
                        <Field name='cookingTimes' as="select">
                          <option value="">Select a CookingTime</option>
                          {cookingTimes.map((cookingTime, idx) => (
                            <option value={cookingTime} key={idx}>
                              {cookingTime}
                            </option>
                          ))}

                        </Field>
                        <ErrorMessage  name="categories" component="div"/>
                       </div>
            </div>

            <ErrorMessage  name="cookingTime" component="div"/>
          </label>
          <button >
            Add 
          </button>
      </Form>
    </Formik>
  );
}


export default AddRecipeForm