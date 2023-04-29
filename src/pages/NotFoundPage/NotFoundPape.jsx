import { Box } from 'components/Box';
import React, { useEffect } from 'react';
import img from 'images/bg/bgError/not-found.svg';

import { InformImage, InformText } from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Title from 'components/Title/Title';

export const NotFoundPage = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigate('/main', { replace: true });
      } else {
        navigate('/signin', { replace: true });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate, isLoggedIn]);

  return (
    <Box as={'main'} mt={52}>
      <Title></Title>
      <InformImage src={img} alt="not found" /> 
       <InformText>
        We are sorry,
        <span>but the page you were looking for can't be found...</span>
      </InformText>
    </Box>
  );
};

export default NotFoundPage;
