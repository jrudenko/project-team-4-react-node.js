// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";
// import { TitleConteiner } from "../Title/Title.styled";


// export const RegisterForm = () => {
//   const dispatch = useDispatch();
// const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <div >
//       <form onSubmit={handleSubmit} autoComplete="off">
//         <TitleConteiner>Registration</TitleConteiner>
//         <label >
//           <input type="text" name="name" placeholder="Name" />
//         </label>
//         <label >
//           <input type="email" name="email" placeholder="Email"/>
//         </label>
//         <label >
//           <input type="password" name="password" placeholder="Password"/>
//         </label>
//         <button  type="submit">
//           Sign up
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
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(1, 'To Short!').max(20, 'To Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, "Must be at least 6 characters. At least one uppercase letter, one lowercase letter and one number")
    .max(16, "Must be less then or equal 16 characters. At least one uppercase letter, one lowercase letter and one number")
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }));
    form.reset();
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
