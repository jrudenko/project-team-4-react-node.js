import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/selectors';
import { registrationUser, loginUser } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';

import Button  from '../../components/Button/Button';
// import { Loader } from '../../components/Loader/loader';
import {
  FormWrapper,
  FormTitle,
  FormInputWrapper,
  FormInput,
  FormLabel,
  FormLink,
  IconName,
  IconEmail,
  IconPassword,
  ErrorIcon,
  WarningIcon,
  CheckIcon,
  ErrMess,
  WarMess,
  SuccMess,
} from './RegistrationForm.styled';

const loginSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Enter a valid email'
    )
    .required('Email is a required field'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",./<>?]*$/,
      'The password can contain only Latin letters, numbers and special characters'
    )
    .required('Password is a required field'),
});

const registerSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Name must contain at least 4 characters')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'The Name must contain only Latin letters and numbers'
    )
    .required('Name is a required field'),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Enter a valid email'
    )
    .required('Email is a required field'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",./<>?]*$/,
      'The password can contain only Latin letters, numbers and special characters'
    )
    .required('Password is a required field'),
});

export const AuthForm = ({ login }) => {
  const [secure, setSecure] = useState(null);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const littleSecure = secure === 0 || secure === 1;
  const mediumSecure = secure === 2 || secure === 3;

  const initialValuesRegister = {
    name: '',
    email: '',
    password: '',
  };
  const initialValuesLogin = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    !login ? dispatch(registrationUser(values)) : dispatch(loginUser(values));
  };
  return (
    <>
      <Formik
        initialValues={!login ? initialValuesRegister : initialValuesLogin}
        onSubmit={handleSubmit}
        validationSchema={!login ? registerSchema : loginSchema}
      >
        {({ errors, touched }) => (
          <FormWrapper>
            <FormTitle>{!login ? 'Registration' : 'Sign In'}</FormTitle>
            <Form>
              <FormInputWrapper>
                {!login && (
                  <>
                    <FormLabel>
                      <Field name="name">
                        {({ field }) => (
                          <>
                            <FormInput
                              state={
                                errors.name && touched.name
                                  ? 'error'
                                  : !errors.name && touched.name
                                  ? 'checked'
                                  : 'undefined'
                              }
                              type="text"
                              placeholder="Name"
                              autoComplete="off"
                              {...field}
                            />
                            <IconName
                              state={
                                errors.name && touched.name
                                  ? 'error'
                                  : !errors.name && touched.name
                                  ? 'checked'
                                  : 'undefined'
                              }
                            />
                            {errors.name && touched.name && <ErrorIcon />}
                            {!errors.name && touched.name && <CheckIcon />}
                            {errors.name && touched.name && (
                              <ErrMess>{errors.name}</ErrMess>
                            )}
                          </>
                        )}
                      </Field>
                    </FormLabel>
                  </>
                )}
                <FormLabel>
                  <Field name="email">
                    {({ field }) => (
                      <>
                        <FormInput
                          state={
                            errors.email && touched.email
                              ? 'error'
                              : !errors.email && touched.email
                              ? 'checked'
                              : 'undefined'
                          }
                          type="Email"
                          placeholder="Email"
                          autoComplete="off"
                          {...field}
                        />
                        <IconEmail
                          state={
                            errors.email && touched.email
                              ? 'error'
                              : !errors.email && touched.email
                              ? 'checked'
                              : 'undefined'
                          }
                        />
                        {errors.email && touched.email && <ErrorIcon />}
                        {!errors.email && touched.email && <CheckIcon />}
                        {errors.email && touched.email && (
                          <ErrMess>{errors.email}</ErrMess>
                        )}
                      </>
                    )}
                  </Field>
                </FormLabel>

                <FormLabel>
                  <Field name="password">
                    {({ field }) => (
                      <>
                        <FormInput
                          state={
                            errors.password && touched.password
                              ? 'error'
                              : !errors.password && secure === 4
                              ? 'checked'
                              : !errors.password && secure === 0
                              ? 'warning'
                              : !errors.password && secure === 1
                              ? 'warning'
                              : !errors.password && secure === 2
                              ? 'warning'
                              : !errors.password && secure === 3
                              ? 'warning'
                              : 'undefined'
                          }
                          type="password"
                          placeholder="Password"
                          {...field}
                          onChange={e => {
                            field.onChange(e);
                            setSecure(zxcvbn(e.target.value).score);
                          }}
                        />
                        <IconPassword
                          state={
                            errors.password && touched.password
                              ? 'error'
                              : !errors.password && secure === 4
                              ? 'checked'
                              : !errors.password && secure === 0
                              ? 'warning'
                              : !errors.password && secure === 1
                              ? 'warning'
                              : !errors.password && secure === 2
                              ? 'warning'
                              : !errors.password && secure === 3
                              ? 'warning'
                              : 'undefined'
                          }
                        />
                        {errors.password && touched.password && <ErrorIcon />}
                        {errors.password && touched.password && (
                          <ErrMess>{errors.password}</ErrMess>
                        )}
                        {!errors.password && littleSecure && (
                          <>
                            <WarMess>Your password is little secure</WarMess>
                            <WarningIcon />
                          </>
                        )}
                        {!errors.password && mediumSecure && (
                          <>
                            <WarMess>Your password is medium secure</WarMess>
                            <WarningIcon />
                          </>
                        )}
                        {!errors.password && secure === 4 && (
                          <>
                            <SuccMess>Your password is secure</SuccMess>
                            <CheckIcon />
                          </>
                        )}
                      </>
                    )}
                  </Field>
                </FormLabel>
              </FormInputWrapper>
              <Button
                type="submit"
                look="subscribe"
                width="100%"
                heigth="45px"
                heigthTablet="59px"
                fontSize="16px"
              >
                {login && !isLoading ? 'Sign in' : null}
                {!login && !isLoading ? 'Sign up' : null}
                {/* {isLoading && <Loader size={40} outcolor="#3E4462" />} */}
              </Button>
            </Form>
            {!login ? (
              <FormLink to="/signin">Sign In</FormLink>
            ) : (
              <FormLink to="/register">Registration</FormLink>
            )}
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};






// import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import { useDispatch} from 'react-redux';
// // import { selectIsLoading } from 'redux/auth/selectors';
// import { registrationUser } from '../../redux/auth/operations';


// import { FormBox, TitleForm, BoxForField, BoxForForm, FormField, FormAuth, Button, BoxForIcon, NameIcon,Warning, EmailIcon,PassIcon} from './RegistrationForm.styled';
// import { Link } from 'react-router-dom';

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(1, 'Name must be at least 1 character')
//     .max(16, 'Name cannot be longer than 16 characters')
//     .required('Name is required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .max(16, 'Password cannot be longer than 16 characters')
//     .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
//     .matches(/[0-9]/, 'Password must contain at least one number')
//     .required('Password is required'),
// });

// const getColor = (
//   errors,
//   touched,
//   defaultColor = 'rgba(255, 255, 255, 0.8)'
// ) => {
//   if (
//     errors === 'Your password is short' ||
//     errors === 'Your password is too long'
//   ) {
//     return '#F6C23E';
//   }
//   return touched ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
// };

// const AuthForm = () => {
//   // const isLoading = useSelector(selectIsLoading);
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     const authData = {
//       name: values.name,
//       email: values.email,
//       password: values.password,
//     };
//     dispatch(
//       registrationUser(authData));
//     actions.resetForm();
//   };
//   return (
//     <div>
//           <FormBox>
//               <Formik
//                     initialValues={{ name: '', email: '', password: '' }}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                    >
//                    {({ errors, touched }) => (
//                      <FormAuth>
//                      <TitleForm>Registration</TitleForm>
//                     <BoxForForm>

//                    <BoxForField>
//                 <BoxForIcon>
//                   <NameIcon stroke={getColor(errors.name, touched.name)} />
//                 </BoxForIcon>
//                 <FormField
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   color={getColor(errors.name, touched.name)}
//                 />
//                 {errors.name && touched.name ? (
//                   <Warning color={getColor(errors.name, touched.name)}>
//                     {errors.name}
//                   </Warning>
//                 ) : null}
//                     </BoxForField>

//               <BoxForField>
//                 <BoxForIcon>
//                   <EmailIcon
//                     stroke={getColor(errors.email, touched.email)}
//                   />
//                 </BoxForIcon>
//                 <FormField
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   color={getColor(errors.email, touched.email)}
//                 />
//                 {errors.email && touched.email ? (
//                   <Warning color={getColor(errors.email, touched.email)}>
//                     {errors.email}
//                   </Warning>
//                 ) : null}
//                   </BoxForField>

//               <BoxForField>
//                 <BoxForIcon>
//                   <PassIcon
//                     stroke={getColor(errors.password, touched.password)}
//                   />
//                 </BoxForIcon>
//                 <FormField
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   color={getColor(errors.password, touched.password)}
//                 />
//                 {errors.password && touched.password ? (
//                   <Warning
//                     color={getColor(errors.password, touched.password)}
//                   >
//                     {errors.password}
//                   </Warning>
//                 ) : null}
//                   </BoxForField>

//                  </BoxForForm>
//               <Button type="submit" to="signin">Sign up</Button>
//                     </FormAuth>
//                     )}
//               </Formik>
//           </FormBox>
//     </div>
//   );
// };

// export default AuthForm;
