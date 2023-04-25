import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useMemo } from 'react';
import WelcomSection from 'pages/Welcome/WelcomSection';

import SharedLayout from './SharedLayout';
// import FavoritePage from '../pages/FavoritePage';
import CategoriesPage from 'pages/Categories/CategoriesPage';
import SearchPage from 'pages/Search/SearchPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import RecipePage from '../pages/RecipePage';
import MainPage from 'pages/Main/MainSection';

import RegisterPage from '../pages/Registration/RegistrationPage';

import SingIn from 'pages/SingIn/SinginPage';

import MyRecipesPage from 'pages/MyRecipes/MyRecipesPage';

import { merge, get } from 'lodash';
import { getOwnRecipeById } from '../redux/recipe/recipeOperation';


// import { lazy } from 'react';

// const FavoritePage = lazy(() => import('../pages/FavoritePage'));




const getTheme = mode =>
  merge({}, theme, {
    colors: get(theme.colors.switches, mode, theme.colors),
  });

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });




export const App = () => {

const dispatch = useDispatch();
const [mode, setMode] = useState('lightTheme');
const darkMode = useSelector(state => state.theme.darkMode);
const theme = getTheme(mode);

  useMemo(() => {
    if (darkMode) {
      setMode('darkTheme');
    } else {
      setMode('lightTheme');
    }
  }, [darkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
      },
    }),
    []
  );

useEffect(() => {
  dispatch(getOwnRecipeById());
}, [dispatch]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
          <Routes>
      <Route path="/welcome" element={<WelcomSection />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/signin" element={<SingIn />} />

      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage>MainPage</MainPage>} />

        <Route path="categories/:categoryName" element={<CategoriesPage />} />

        <Route path="add" element={<AddRecipePage />} />

        <Route path="favorite" element={<div>FavoritePage</div>} />

        <Route path="recipe/:recipeId" element={<RecipePage />} />

        <Route path="my" element={<MyRecipesPage />} />

        <Route path="search" element={<SearchPage />} />

        <Route path="shopping-list" element={<div>ShoppingListPage</div>} />

        <Route path="*" element={<div>NotFoundPage</div>} />
      </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

