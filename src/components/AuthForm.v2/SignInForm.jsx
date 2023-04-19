// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';
// import {TitleConteiner } from "../Title/Title.styled";

// export const SingInForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <div >
//       <form onSubmit={handleSubmit} autoComplete="off">
//         <TitleConteiner>Sign In</TitleConteiner>
//         <label >
//           <input type="email" name="email" placeholder="Email"/>
//         </label>
//         <label >
//           <input type="password" name="password" placeholder="Password"/>
//         </label>
//         <button  type="submit">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TitleConteiner } from "../Title/Title.styled";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email. Use letters, numbers, signs @ and .').required('Required'),
  password: Yup.string().min(6, "Must be: at least 6 characters, at least one uppercase letter, one lowercase letter and one number")
    .max(16, "Must be less then or equal 16 characters. At least one uppercase letter, one lowercase letter and one number")
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn({
      email: values.email,
      password: values.password,
    })
    )
    resetForm()
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <TitleConteiner>Sign In</TitleConteiner>
         <div>
          <Field name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <Field name="password" type="text" placeholder="Password" />
          <ErrorMessage name="password" />
         </div>
      </Form>
      <button type="submit">Sign In</button>
    </Formik>
  )
}
