import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import WelcomSection from 'pages/Welcome/WelcomSection';

import SharedLayout from './SharedLayout';
import FavoritePage from '../pages/FavoritePage';
import CategoriesPage from 'pages/Categories/CategoriesPage';
import SearchPage from 'pages/Search/SearchPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import RecipePage from '../pages/RecipePage';
import MainPage from 'pages/Main/MainSection';


// import { getMode } from '../redux/theme/themeSelector';
// import {
//   getAccessToken,
// } from '../redux/auth/selectors';
import { getCurrentUser } from '../redux/auth/operations';

import RegistrationPage from '../pages/Registration/RegistrationPage';
import SingIn from 'pages/SingIn/SinginPage';

import MyRecipesPage from 'pages/MyRecipes/MyRecipesPage';

// import { lazy } from 'react';

// const FavoritePage = lazy(() => import('../pages/FavoritePage'));

export const App = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2RhYjA2ODJhZGUzMDA2ZjY3ZWNhZSIsImlhdCI6MTY4MTc2MzMwNX0.xgcSynbdL8pnbV4_bItE5Tagzj7XVNcGXClp35qD59Q";
  // const { mode } = useSelector(getMode);

  const dispatcher = useDispatch();

  useEffect(() => {
    if (token === null) return;
    dispatcher(getCurrentUser());
  }, [dispatcher, token]);

  return (
    <Routes>
      <Route path="/welcome" element={<WelcomSection />} />

      <Route path="/register" element={<RegistrationPage />} />

      <Route path="/signin" element={<SingIn />} />

      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage>MainPage</MainPage>} />

        <Route path="categories/:categoryName" element={<CategoriesPage />} />

        <Route path="add" element={<AddRecipePage />} />

        <Route path="favorite" element={<FavoritePage />} />

        <Route path="recipe/:recipeId" element={<RecipePage />} />

        <Route path="my" element={<MyRecipesPage />} />

        <Route path="search" element={<SearchPage />} />

        <Route path="shopping-list" element={<div>ShoppingListPage</div>} />

        <Route path="*" element={<div>NotFoundPage</div>} />
      </Route>
    </Routes>
  );
};
