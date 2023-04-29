import React from 'react';
import { AuthForm } from 'components/AuthForm/RegistrationForm';
import { AuthMain, AuthBackground, Wrapper } from './RegistrationPage.styled';
import { AuthImg } from '../../components/AuthImeges/AuthImg';

export const RegisterPage = () => {

  return (
    <>
      <AuthMain>
        <Wrapper>
          <AuthImg />
          <AuthForm />
        </Wrapper>
        <AuthBackground></AuthBackground>
      </AuthMain>
    </>
  );
};
