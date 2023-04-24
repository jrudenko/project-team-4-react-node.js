import { useDispatch, useSelector } from "react-redux";
import { TogglContainer, TogglCircle } from "./ThemeToggler.styled";
import { toggleTheme } from 'redux/ThemeSlice/ThemeSlice';

const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <TogglContainer>
      <TogglCircle
        type="checkbox"
        checked={theme}
        onChange={() => dispatch(toggleTheme())}
      />
    </TogglContainer>
  );
};

export default ThemeToggler;