import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();
const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div >
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Registration</h1>
        <label >
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label >
          <input type="email" name="email" placeholder="Email"/>
        </label>
        <label >
          <input type="password" name="password" placeholder="Password"/>
        </label>
        <button  type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
