import React, { useState } from 'react';
import { TogglContainer, TogglCircle } from './ThemeToggler.styled';

const ThemeToggler = ({ onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleTheme = () => {
    setIsActive(prevState => !prevState);
    onChange();
  };

  return (
    <TogglContainer isActive={isActive} onClick={toggleTheme}>
      <TogglCircle isActive={isActive} />
    </TogglContainer>
  );
};

export default ThemeToggler;
