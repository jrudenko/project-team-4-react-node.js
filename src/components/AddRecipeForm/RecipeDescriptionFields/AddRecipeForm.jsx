import { Formik, Form, Field } from "formik";
import styled from "styled-components";

const initialValues = {
  itemTitle: '',
  aboutRecipe: '',
  category: '',
  cookingTime: '',
}

const Input = styled(Field)`
font-size: 40px;`;

const AddRecipeForm = () => {

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
          <label htmlFor="itemTitle">
            <Input        
              type="text"
              name="itemTitle"     
              placeholder="Enter item title"
            />
          </label>
          <label htmlFor="aboutRecipe">
            <Input       
              type="text"
              name="aboutRecipe"            
              placeholder="Enter about recipe"
            />
          </label>
          <label htmlFor="category">
            <Input        
              type="text"
              name="category"                
              placeholder="Category"
            />
          </label>
          <label htmlFor="cookingTime">
            <Input        
              type="text"
              name="cookingTime"                  
              placeholder="Cooking time"
            />
          </label>
          <button >
            Add 
          </button>
      </Form>
    </Formik>
  );
}


export default AddRecipeForm