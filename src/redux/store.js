import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// import { authReducer } from './auth/slice';

import authSlice from './auth/slice';

import outerRecipesSlice from './outerRecipes/outerRecipesSlice';
import ingredientsSlice from './ingredients/ingredientsSlice';
import ownRecipesSlice from './ownRecipes/ownRecipesSlice';
import themeReducer from './theme/themeSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

const ingredientsPersistConfig = {
  key: 'ingredients',
  storage,
  whitelist: ['ingredients'],
};
const outerRecipesPersistConfig = {
  key: 'outerRecipes',
  storage,
  whitelist: ['mainCategories', 'categoryList', 'popularRecipes'],
};

const ownRecipesPersistConfig = {
  key: 'ownRecipes',
  storage,
  whitelist: ['ownRecipes', 'favorites'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistedIngredientsReducer = persistReducer(
  ingredientsPersistConfig,
  ingredientsSlice
);
const persistedOuterRecipesReducer = persistReducer(
  outerRecipesPersistConfig,
  outerRecipesSlice
);
const persistedOwnRecipesReducer = persistReducer(
  ownRecipesPersistConfig,
  ownRecipesSlice
);

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    ingredients: persistedIngredientsReducer,
    outerRecipes: persistedOuterRecipesReducer,
    ownRecipes: persistedOwnRecipesReducer,
    theme: persistedThemeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
// export { store };
