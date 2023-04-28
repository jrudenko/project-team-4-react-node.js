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

