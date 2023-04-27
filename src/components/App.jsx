import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute, RestrictedRoute } from './Routes';
import { merge, get } from 'lodash';
import { refreshUser } from '../redux/auth/operations';
import { StyledToastContainer } from 'pages/Registration/RegistrationPage.styled';

import WelcomSection from 'pages/Welcome/WelcomSection';
import NotFoundPage from 'pages/NotFoundPage';
import SharedLayout from 'components/SharedLayout';
import { RegisterPage } from 'pages/Registration/RegistrationPage';
import { SigninPage } from 'pages/SingIn/SinginPage';
import { Loader } from 'components/Loader/Loader';

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
                <PrivateRoute component={SharedLayout} redirectTo="/signin" />
              }
            >
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path="main"
                element={
                  <Suspense fallback={<Loader />}>
                    <MainPage />
                  </Suspense>
                }
              />

              <Route
                path="categories/:categoryName"
                element={
                  <Suspense fallback={<Loader />}>
                    <CategoriesPage />
                  </Suspense>
                }               
              />
              <Route path="add" element={
                <Suspense fallback={<Loader />}>
                    <AddRecipePage />
                </Suspense>
              }
              />
              <Route
                path="favorite"
                element={
                  <Suspense fallback={<Loader />}>
                    <FavoritePage />
                  </Suspense>
                }
              />
              <Route
                path="recipe/:recipeId"
                element={
                  <Suspense fallback={<Loader />}>
                    <RecipePage />
                  </Suspense>
                }
              />
              <Route
                path="my"
                element={
                  <Suspense fallback={<Loader />}>
                    <MyRecipesPage />
                  </Suspense>
                }
              />
              <Route
                path="search"
                element={
                  <Suspense fallback={<Loader />}>
                    <SearchPage />
                  </Suspense>
                }
              />
              <Route
                path="shopping-list"
                element={
                  <Suspense fallback={<Loader />}>
                    <ShoppingPage />
                  </Suspense>
                }
              />
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
