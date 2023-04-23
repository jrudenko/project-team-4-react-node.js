import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/slice';
import { themeSlice } from './ThemeSlice/ThemeSlice';
import { shoppingsReducer } from './shoppingList/shoppingListSlice';
import { searchReducer } from './search/searchSlice';
import { addRecipeReducer } from './addRecipe/addRecipeSlice';
import { popularReducer } from './popular/popularSlice';
import { recipeReducer } from './recipe/recipeSlice';

const rootPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['isLoading', 'isSent'],
};

const themePersistedConfig = {
  key: 'theme',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(rootPersistConfig, authReducer),
  theme: persistReducer(themePersistedConfig, themeSlice.reducer),
  shoppings: shoppingsReducer,
  search: searchReducer,
  add: addRecipeReducer,
  popular: popularReducer,
  recipe: recipeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   // FLUSH,
//   // REHYDRATE,
//   // PAUSE,
//   // PERSIST,
//   // PURGE,
//   // REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// // import { authReducer } from './auth/slice';

// import authSlice from './auth/slice';

// import outerRecipesSlice from './outerRecipes/outerRecipesSlice';
// import ingredientsSlice from './ingredients/ingredientsSlice';
// import ownRecipesSlice from './ownRecipes/ownRecipesSlice';
// import themeReducer from './theme/themeSlice';

// // const middleware = [
// //   ...getDefaultMiddleware({
// //     serializableCheck: {
// //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //     },
// //   }),
// // ];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// // const store = configureStore({
// //   reducer: {
// //     auth: persistReducer(authPersistConfig, authReducer),
// //   },
// //   middleware,
// //   devTools: process.env.NODE_ENV === 'development',
// // });

// const ingredientsPersistConfig = {
//   key: 'ingredients',
//   storage,
//   whitelist: ['ingredients'],
// };
// const outerRecipesPersistConfig = {
//   key: 'outerRecipes',
//   storage,
//   whitelist: ['mainCategories', 'categoryList', 'popularRecipes'],
// };

// const ownRecipesPersistConfig = {
//   key: 'ownRecipes',
//   storage,
//   whitelist: ['ownRecipes', 'favorites'],
// };

// const themePersistConfig = {
//   key: 'theme',
//   storage,
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
// const persistedIngredientsReducer = persistReducer(
//   ingredientsPersistConfig,
//   ingredientsSlice
// );
// const persistedOuterRecipesReducer = persistReducer(
//   outerRecipesPersistConfig,
//   outerRecipesSlice
// );
// const persistedOwnRecipesReducer = persistReducer(
//   ownRecipesPersistConfig,
//   ownRecipesSlice
// );

// const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer,
//     ingredients: persistedIngredientsReducer,
//     outerRecipes: persistedOuterRecipesReducer,
//     ownRecipes: persistedOwnRecipesReducer,
//     theme: persistedThemeReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
// // export { store };
