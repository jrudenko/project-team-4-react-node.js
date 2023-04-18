import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TitleConteiner } from "../Title/Title.styled";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";


const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email. Use letters, numbers, signs @ and .').required('Required'),
  password: Yup.string().min(6, "Must be: at least 6 characters, at least one uppercase letter, one lowercase letter and one number")
    .max(16, "Must be less then or equal 16 characters.")
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, {resetForm}) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <TitleConteiner>Registration</TitleConteiner>
        <div>
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage name="name" />
         </div>
         <div>
          <Field name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <Field name="password" type="text" placeholder="Password" />
          <ErrorMessage name="password" />
         </div>
      </Form>
      <button type="submit">Sign up</button>
    </Formik>
  )
}

