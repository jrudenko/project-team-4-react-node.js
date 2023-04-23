import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCategoryList,
  getIngredientsList,
  addRecipe,
} from './addRecipeOperation';
import {
  getActions,
  getCategoryFulfilledReducer,
  getIngredientsFulfilledReducer,
  addRecipeFulfilledReducer,
} from './addRecipeHelpers';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
} from '../helpers/sharedReducerHelpers';

const initialState = {
  category: [],
  ingredients: [],
  recipe: null,
  isLoading: false,
  error: null,
};

const addRecipeSlice = createSlice({
  name: 'add',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategoryList.fulfilled, getCategoryFulfilledReducer)
      .addCase(getIngredientsList.fulfilled, getIngredientsFulfilledReducer)
      .addCase(addRecipe.fulfilled, addRecipeFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

export const addRecipeReducer = addRecipeSlice.reducer;
