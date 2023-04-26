import { TitleConteiner } from './Title.styled';
import React from 'react';
import { useSelector } from 'react-redux';


const Title = ({ children }) => {
   const darkMode = useSelector(state => state.theme);
  
  return (
    <TitleConteiner dark={darkMode.darkMode}>
      <h2>{children}</h2>
    </TitleConteiner>
  );
};

export default Title;
