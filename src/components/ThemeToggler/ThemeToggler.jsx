import React, { useState } from 'react';
import { TogglContainer, TogglCircle } from './ThemeToggler.styled';
import { theme, darkTheme } from '../../utils/theme'; 

const ThemeToggler = ({ onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme); 

  const toggleTheme = () => {
    setIsActive(prevState => !prevState);
    setCurrentTheme(currentTheme === theme ? darkTheme : theme); 
    onChange();
  };

  return (
    <TogglContainer isActive={isActive} onClick={toggleTheme}>
      <TogglCircle isActive={isActive} />
    </TogglContainer>
  );
};

export default ThemeToggler;





// import React from 'react';
// import { TogglContainer, TogglCircle } from './ThemeToggler.styled';
// import useTheme from './useTheme';

// const ThemeToggler = () => {
//   const [theme, toggleTheme] = useTheme();

//   return (
//     <TogglContainer isActive={theme === 'dark'} onClick={toggleTheme}>
//       <TogglCircle isActive={theme === 'dark'} />
//     </TogglContainer>
//   );
// };

// export default ThemeToggler;



