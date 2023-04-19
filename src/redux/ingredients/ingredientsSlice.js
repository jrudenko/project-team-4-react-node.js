import { createSlice } from '@reduxjs/toolkit';
import { getAllIngredients } from './ingredientsOperations';

import {
  getShoppingIngredient,
  addShoppingIngredient,
  removeShoppingIngredient,
} from './ingredientsOperations';

import { logOut } from 'redux/auth/operations';

const pending = state => {
  state.isIngredientsFetching = true;
};
const rejected = state => {
  state.isIngredientsFetching = false;
};

const initialState = {
  isIngredientsFetching: false,
  ingredients: [],
  shoppingList: [],
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllIngredients.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
        state.isIngredientsFetching = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))
      .addCase(getShoppingIngredient.fulfilled, (state, { payload }) => {
        state.shoppingList = payload;
        state.isIngredientsFetching = false;
      })
      .addCase(addShoppingIngredient.fulfilled, (state, { payload }) => {
        state.shoppingList.unshift(payload);
        state.isIngredientsFetching = false;
      })
      .addCase(removeShoppingIngredient.fulfilled, (state, { payload }) => {
        state.shoppingList = state.shoppingList.filter(
          el => el._id !== payload.id
        );
      })

      .addCase(getAllIngredients.pending, pending)
      .addCase(getShoppingIngredient.pending, pending)

      .addCase(getAllIngredients.rejected, rejected)
      .addCase(getShoppingIngredient.rejected, rejected),
});

export default ingredientsSlice.reducer;
