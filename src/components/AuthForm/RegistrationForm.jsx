import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name must be at least 1 character')
    .max(16, 'Name cannot be longer than 16 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password cannot be longer than 16 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
});

const AuthForm = ({ formType, handleSubmit }) => {
  return (
    <div>
      <h2>{formType === 'register' ? 'Sign In': 'Register'}</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field name="name" type="text" placeholder="Name"/>
              <ErrorMessage name="name" />
            </div>
            <div>
              <Field name="email" type="email" placeholder="Email"/>
              <ErrorMessage name="email" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Password"/>
              <ErrorMessage name="password" />
            </div>
            <button type="submit">{formType === 'register' ? 'Sign Up' : 'Sign In'}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
