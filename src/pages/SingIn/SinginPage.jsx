import React, { useEffect } from 'react';
import { AuthForm } from 'components/AuthForm/RegistrationForm';
import {
  AuthMain,
  AuthImage,
  AuthBackground,
} from '../../pages/Registration/RegistrationPage.styled';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const SigninPage = () => {
  const params = useParams();

  useEffect(() => {
    const url =
      'https://team-project-so-yummy-backend.onrender.com/api/auth/verify/';

    if (params.verificationToken) {
      axios.get(url.concat(params.verificationToken));
    }
  }, [params]);

  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <AuthForm login />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};








// import  SignInForm  from '../../components/AuthForm.v2/SignInForm';
// import { Link } from 'react-router-dom';
// import { Page, BackgroundImg, Container, Image, Box } from "../Registration/RegistrationPage.styled";


// const SingIn = () => {
//   return (
//     <Page>
//       <Container>
//      <Image />
//        <Box>
//         <SignInForm />
//         <Link
//           to="/register"
//           style={{
//             color: 'white',
//             textDecoration: 'underline',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//           }}
//         >
//           Registration
//         </Link>
//       </Box>
//       </Container>
//         <BackgroundImg></BackgroundImg>
//     </Page>
//   );
// };

// export default SingIn;
