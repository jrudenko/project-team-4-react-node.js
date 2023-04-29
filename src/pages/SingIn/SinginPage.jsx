import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthForm } from 'components/AuthForm/RegistrationForm';
import {
  AuthMain,
  AuthBackground,
  Wrapper,
} from '../../pages/Registration/RegistrationPage.styled';
import { AuthImg } from '../../components/AuthImeges/AuthImg';

export const SigninPage = () => {
  const params = useParams();

  useEffect(() => {
    const url = 'https://yummy-rest-api.yurgo.fun/api/auth/verify/';

    if (params.verificationToken) {
      axios.get(url.concat(params.verificationToken));
    }
  }, [params]);

  return (
    <AuthMain>
      <Wrapper>
        <AuthImg />
        <AuthForm login />
      </Wrapper>

      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
