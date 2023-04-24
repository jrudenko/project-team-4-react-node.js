import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsSend, selectEmail } from '../../redux/auth/selectors';

import { AuthForm } from 'components/AuthForm/RegistrationForm';
import { AuthMain, AuthImage, AuthBackground } from './RegistrationPage.styled';

import { toast } from 'react-toastify';

export const RegisterPage = () => {
  const isSent = useSelector(selectIsSend);
  const currentEmail = useSelector(selectEmail);

  useEffect(() => {
    isSent &&
      toast.success(`A verification email has been sent to ${currentEmail}`, {
        position: 'top-right',
      });
  }, [isSent, currentEmail]);

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

