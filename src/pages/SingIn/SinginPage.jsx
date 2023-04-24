import  SignInForm  from '../../components/AuthForm.v2/SignInForm';
import { Link } from 'react-router-dom';
import { Page, BackgroundImg, Container, Image, Box } from "../Registration/RegistrationPage.styled";


const SingIn = () => {
  return (
    <Page>
      <Container>
     <Image />
       <Box>
        <SignInForm />
        <Link
          to="/singin"
          style={{
            color: 'white',
            textDecoration: 'underline',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Registration
        </Link>
      </Box>
      </Container>
        <BackgroundImg></BackgroundImg>
    </Page>
  );
};

export default SingIn;
