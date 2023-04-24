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





// import React, {useEffect} from "react";
// import { Link } from "react-router-dom";
// import AuthForm from "../../components/AuthForm/RegistrationForm";
// import { Page, BackgroundImg, Container, Image, Box } from "./RegistrationPage.styled"
// import { useSelector } from "react-redux";
// import {  selectIsSend, selectEmail} from '../../redux/auth/selectors';
// import { toast } from "react-toastify";
// // import { Loader } from 'components/Loader/Loader';


// const RegisterPage = () => {
//   const isSent = useSelector(selectIsSend);
//   const currentEmail = useSelector(selectEmail);

//   useEffect(() => {
//     isSent &&
//       toast.success(`A verification email has been sent to ${currentEmail}`, {
//         position: 'top-right',
//       });
//   }, [isSent, currentEmail])

//   return (
//     <Page>
//           <Container>
//           <Image />
//           <Box>
//             <AuthForm />
//             <Link to="/signin" style={{ color: "white", textDecoration: 'underline'}}>Sign in</Link>
//           </Box>
//        </Container>

//        <BackgroundImg></BackgroundImg>
//     </Page>
//   );
// };

// export default RegisterPage;
