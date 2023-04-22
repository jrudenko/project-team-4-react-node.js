import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/RegistrationForm";
import {BackgroundImg,Container, Image} from "./RegistrationPage.styled"
const RegisterPage = () => {
  return (
    <Container>
      <Image/>
      <AuthForm />
      <Link to="/signin">Sign in</Link>
      <BackgroundImg></BackgroundImg>
    </Container>
  );
};

export default RegisterPage;
