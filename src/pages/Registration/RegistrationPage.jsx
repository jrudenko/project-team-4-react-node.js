import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/AuthForm/RegisterForm';
import { Page, Image } from './RegistrationPage.styled';

const Register = () => {
  return (
    <Page>
      <Image/>
    <div>
      <RegisterForm />
      <Link
        to="/singin"
        style={{
          color: 'white',
          textDecoration: 'underline',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Sign In
      </Link>
    </div>
    </Page>

  );
};

export default Register;
