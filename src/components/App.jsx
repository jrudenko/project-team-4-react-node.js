import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import WelcomSection from 'pages/Welcome/WelcomSection';

import SharedLayout from './SharedLayout';
// import FavoritePage from '../pages/FavoritePage';
import CategoriesPage from 'pages/Categories/CategoriesPage';
import SearchPage from 'pages/Search/SearchPage';
// import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import RecipePage from '../pages/RecipePage';
import MainPage from 'pages/Main/MainSection';

import RegisterPage from '../pages/Registration/RegistrationPage';

import SingIn from 'pages/SingIn/SinginPage';

import MyRecipesPage from 'pages/MyRecipes/MyRecipesPage';
import AddRecipe from 'pages/AddRecipe/AddRecipe';
// import { lazy } from 'react';

// const FavoritePage = lazy(() => import('../pages/FavoritePage'));

export const App = () => {

  return (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/welcome" element={<WelcomSection />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/signin" element={<SingIn />} />

      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage>MainPage</MainPage>} />

        <Route path="categories/:categoryName" element={<CategoriesPage />} />

        <Route path="add" element={<AddRecipe />} />

        <Route path="favorite" element={<div>FavoritePage</div>} />

        <Route path="recipe/:recipeId" element={<RecipePage />} />

        <Route path="my" element={<MyRecipesPage />} />

        <Route path="search" element={<SearchPage />} />

        <Route path="shopping-list" element={<div>ShoppingListPage</div>} />

        <Route path="*" element={<div>NotFoundPage</div>} />
      </Route>
    </Routes>
  </ThemeProvider>    
  );
};
