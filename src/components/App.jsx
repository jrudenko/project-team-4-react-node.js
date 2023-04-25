import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useMemo, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import { useDispatch, useSelector } from 'react-redux';

import { PrivateRoute, RestrictedRoute } from './Routes';

import { merge, get } from 'lodash';
import { refreshUser } from '../redux/auth/operations';
import { StyledToastContainer } from 'pages/Registration/RegistrationPage.styled';

import WelcomSection from 'pages/Welcome/WelcomSection';
import SharedLayout from 'components/SharedLayout';
import { RegisterPage } from '../pages/Registration/RegistrationPage';
import { SigninPage } from 'pages/SingIn/SinginPage';

// import FavoritePage from '../pages/FavoritePage';
// import CategoriesPage from 'pages/Categories/CategoriesPage';
// import SearchPage from 'pages/Search/SearchPage';
// import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
// import RecipePage from '../pages/RecipePage';
// import MainPage from 'pages/Main/MainSection';
// import ShoppingPage from 'pages/ShoppingPage/ShoppingPage';
// import MyRecipesPage from 'pages/MyRecipes/MyRecipesPage';
// import AddRecipe from 'pages/AddRecipe/AddRecipe';

const ShoppingPage = lazy(() => import('pages/ShoppingPage/ShoppingPage'));
const SearchPage = lazy(() => import('pages/Search/SearchPage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipes/MyRecipesPage'));
const RecipePage = lazy(() => import('pages/RecipePage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const CategoriesPage = lazy(() => import('pages/Categories/CategoriesPage'));
const MainPage = lazy(() => import('pages/Main/MainSection'));

const getTheme = mode =>
  merge({}, theme, {
    colors: get(theme.colors.switches, mode, theme.colors),
  });

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(state => state.auth);
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
        setMode(prevMode =>
          prevMode === 'lightTheme' ? 'darkTheme' : 'lightTheme'
        );
      },
    }),
    []
  );

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {!isRefreshing && (
          <Routes>
            {!isLoggedIn && <Route index element={<WelcomSection />} />}

            <Route
              path="/"
              element={
                // <PrivateRoute element={<SharedLayout />} redirectTo="/signin" />
                <PrivateRoute component={SharedLayout} redirectTo="/signin" />
              }
            >
              <Route path="*" element={<div>NotFoundPage</div>} />
              <Route path="main" element={<MainPage />} />

              <Route
                path="categories/:categoryName"
                element={<CategoriesPage />}
              />
              <Route path="add" element={<AddRecipePage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="recipe/:recipeId" element={<RecipePage />} />
              <Route path="my" element={<MyRecipesPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="shopping-list" element={<ShoppingPage />} />
            </Route>

            <Route
              index
              path="/register"
              element={
                <RestrictedRoute component={RegisterPage} redirectTo="/main" />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute component={SigninPage} redirectTo="/main" />
              }
            />
            <Route
              path="/signin/:verificationToken"
              element={
                <RestrictedRoute component={SigninPage} redirectTo="/main" />
              }
            />

            {/* <Route path="/register" element={<RegisterPage />} /> */}

            {/* <Route path="/signin" element={<SigninPage />} /> */}

            {/* <Route path="/" element={<SharedLayout />}> */}
            {/* <Route path="main" element={<MainPage>MainPage</MainPage>} /> */}

            {/* <Route path="categories/:categoryName" element={<CategoriesPage />} /> */}

            {/* <Route path="add" element={<AddRecipe />} /> */}

            {/* <Route path="favorite" element={<div>FavoritePage</div>} /> */}

            {/* <Route path="recipe/:recipeId" element={<RecipePage />} /> */}

            {/* <Route path="my" element={<MyRecipesPage />} /> */}

            {/* <Route path="search" element={<SearchPage />} /> */}

            {/* <Route path="shopping-list" element={<ShoppingPage />} /> */}

            {/* <Route path="*" element={<div>NotFoundPage</div>} /> */}
            {/* </Route> */}
          </Routes>
        )}
        <StyledToastContainer
          osition="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? 'darkTheme' : 'lightTheme'}
        />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
