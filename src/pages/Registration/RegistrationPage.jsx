import React from 'react';
import { AuthForm } from 'components/AuthForm/RegistrationForm';
import { AuthMain, AuthImage, AuthBackground } from './RegistrationPage.styled';

export const RegisterPage = () => {

  return (
    <>
      <AuthMain>
        <AuthImage></AuthImage>
        <AuthForm />
        <AuthBackground></AuthBackground>
      </AuthMain>
    </>
  );
};

