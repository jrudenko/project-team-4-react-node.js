import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const SingInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div >
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Sign In</h1>
        <label >
          <input type="email" name="email" placeholder="Email"/>
        </label>
        <label >
          <input type="password" name="password" placeholder="Password"/>
        </label>
        <button  type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
