

import React from "react";
import { Formik, Form, Field,  ErrorMessage } from "formik";
import img from '../../../images/defaultImage/defaultImage.jpg'

import * as Yup from 'yup';

// import {
//   Input,
// } from './AddRecipeForm.styled';


const AddRecipeSchema = Yup.object({
  itemTitle: Yup.string(),
  aboutRecipe: Yup.string(),
  cookingTime: Yup.number(),
  categoryName: Yup.string(),
  
})

const initialValues = {
  itemTitle: '',
  aboutRecipe: '',
  categoryName: '',
  cookingTime: '',
  
}

const categories = [ 'Soup', 'Goat', 'Lamb', 'Beef', 'Miscellaneous', 'Pasta', 'Breakfast',
'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Chicken','Dessert']


const AddRecipeForm = () => {

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} validationSchema={AddRecipeSchema} onSubmit={handleSubmit}>

      <Form autoComplete="off">

              <div >
              <img  src={img} style= {{width: '200px'}} alt="addphoto" />
              </div>      

          <label htmlFor="itemTitle">
            <Field        
              type="text"
              name="itemTitle"     
              placeholder="Enter item title"
            />
            <ErrorMessage  name="itemTitle" component="div" />
          </label>
          <label htmlFor="aboutRecipe">
            <Field       
              type="text"
              name="aboutRecipe"            
              placeholder="Enter about recipe"
            />
            <ErrorMessage  name="aboutRecipe" component="div"/>
          </label>


        <label htmlFor="categoryName">
          <div>
             <label htmlFor="categoryName">Category</label>
             <Field
              as="select"
              id="recipeCategory"
              name="categoryName"
              size={1}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>
            
            <ErrorMessage name="categories" component="div" />
          </div>
        </label>  
      
        <label htmlFor="cookingTime">
        <div>
             <label htmlFor="cookingTime">Cooking time</label>
                <Field 
                as="select" 
                id="recipeTime" 
                name="cookingTime"
                size={1}>
                    {Array.from({ length: 24 }, (_, index) => (index + 1) * 5).map(
                      (time) => (
                        <option key={time} value={time}>
                          {time} min
                        </option>
                      )
                    )}
                </Field>
            <ErrorMessage name="recipeTime" component="div"/>
          </div>
          </label>
          
          <button >
            Add 
          </button>
      </Form>
    </Formik>
  );
}


export default AddRecipeForm