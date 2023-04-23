import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/RegistrationForm";
import { Page, BackgroundImg, Container, Image, Box } from "./RegistrationPage.styled"
import { useSelector } from "react-redux";
import { getAccessToken } from '../../redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';


const RegisterPage = () => {
  const isLoading=useSelector(getAccessToken)
  return (
    <Page>
      {isLoading && <Loader />}
      {!isLoading && (
         <Container>
          <Image />
          <Box>
            <AuthForm />
            <Link to="/signin" style={{ color: "white", textDecoration: 'underline'}}>Sign in</Link>
          </Box>

       </Container>
      )}
       <BackgroundImg></BackgroundImg>
    </Page>
  );
};

export default RegisterPage;
