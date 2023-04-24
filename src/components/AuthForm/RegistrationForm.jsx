import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { registrationUser } from '../../redux/auth/operations';


import { FormBox, TitleForm, BoxForField, BoxForForm, FormField, FormAuth, Button, BoxForIcon, NameIcon,Warning, EmailIcon,PassIcon} from './RegistrationForm.styled';

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

const getColor = (
  errors,
  touched,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (
    errors === 'Your password is short' ||
    errors === 'Your password is too long'
  ) {
    return '#F6C23E';
  }
  return touched ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};

const AuthForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const authData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(
      registrationUser(authData));
    actions.resetForm();
  };
  return (
    <div>
          <FormBox>
              <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                   >
                   {({ errors, touched }) => (
                     <FormAuth>
                     <TitleForm>Registration</TitleForm>
                    <BoxForForm>

                   <BoxForField>
                <BoxForIcon>
                  <NameIcon stroke={getColor(errors.name, touched.name)} />
                </BoxForIcon>
                <FormField
                  type="text"
                  name="name"
                  placeholder="Name"
                  color={getColor(errors.name, touched.name)}
                />
                {errors.name && touched.name ? (
                  <Warning color={getColor(errors.name, touched.name)}>
                    {errors.name}
                  </Warning>
                ) : null}
                    </BoxForField>

              <BoxForField>
                <BoxForIcon>
                  <EmailIcon
                    stroke={getColor(errors.email, touched.email)}
                  />
                </BoxForIcon>
                <FormField
                  type="email"
                  name="email"
                  placeholder="Email"
                  color={getColor(errors.email, touched.email)}
                />
                {errors.email && touched.email ? (
                  <Warning color={getColor(errors.email, touched.email)}>
                    {errors.email}
                  </Warning>
                ) : null}
                  </BoxForField>

              <BoxForField>
                <BoxForIcon>
                  <PassIcon
                    stroke={getColor(errors.password, touched.password)}
                  />
                </BoxForIcon>
                <FormField
                  type="password"
                  name="password"
                  placeholder="Password"
                  color={getColor(errors.password, touched.password)}
                />
                {errors.password && touched.password ? (
                  <Warning
                    color={getColor(errors.password, touched.password)}
                  >
                    {errors.password}
                  </Warning>
                ) : null}
                  </BoxForField>

                 </BoxForForm>
                <Button type="submit">Sign up</Button>
                    </FormAuth>
                    )}
              </Formik>
          </FormBox>
    </div>
  );
};

export default AuthForm;
