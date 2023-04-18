import { SignInForm } from '../../components/AuthForm.v2/SignInForm';
import { Link } from 'react-router-dom';
import { Page, Image } from './SingInPage.styled';

const SingIn = () => {
  return (
    <Page>
      <Image />
      <div>
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
      </div>
    </Page>
  );
};

export default SingIn;
