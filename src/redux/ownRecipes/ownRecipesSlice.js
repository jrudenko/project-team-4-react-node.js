import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { getOneRecipeById } from 'redux/outerRecipes/outerRecipesOperations';
import {
  getOwnRecipes,
  deleteOwnRecipe,
  addOwnRecipe,
  getFavorite,
  addFavorite,
  deleteFavorite,
  getOwnRecipeByID,
} from './ownRecipesOperations';

const pending = state => {
  state.isOwnRecipesFetching = true;
};
const rejected = state => {
  state.isOwnRecipesFetching = false;
};

const pendingSingle = state => {
  state.isOwnRecipesFetching = true;
  state.singleRecipe = null;
};
const rejectedSingle = state => {
  state.isOwnRecipesFetching = false;
  state.singleRecipe = null;
};

const initialState = {
  isOwnRecipesFetching: false,
  ownRecipes: { recipes: [], total: 0 },
  favorites: { recipes: [], total: 0 },
  singleRecipe: null,
};

export const ingredientsSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = payload.recipes;
        state.ownRecipes.total = payload.total;
        state.isOwnRecipesFetching = false;
      })
      .addCase(addOwnRecipe.fulfilled, state => {
        state.isOwnRecipesFetching = false;
      })
      .addCase(deleteOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = state.ownRecipes.recipes.filter(
          recipe => recipe.idMeal !== payload.id
        );
        state.isOwnRecipesFetching = false;
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.favorites.recipes = payload.recipes;
        state.favorites.total = payload.total;
        state.isOwnRecipesFetching = false;
      })
      .addCase(addFavorite.fulfilled, state => {
        state.isOwnRecipesFetching = false;
      })
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        state.favorites.recipes = state.favorites.recipes.filter(
          recipe => recipe.idMeal !== payload.id
        );
        state.isOwnRecipesFetching = false;
      })
      .addCase(getOwnRecipeByID.fulfilled, (state, { payload }) => {
        state.singleRecipe = payload;
        state.isOwnRecipesFetching = false;
      })
      .addCase(getOneRecipeById.fulfilled, (state, { payload }) => {
        state.singleRecipe = payload;
        state.isOwnRecipesFetching = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))

      .addCase(getOwnRecipes.pending, pending)
      .addCase(addOwnRecipe.pending, pending)
      .addCase(deleteOwnRecipe.pending, pending)
      .addCase(getFavorite.pending, pending)
      .addCase(addFavorite.pending, pending)
      .addCase(getOwnRecipeByID.pending, pendingSingle)
      .addCase(getOneRecipeById.pending, pendingSingle)

      .addCase(getOwnRecipes.rejected, rejected)
      .addCase(addOwnRecipe.rejected, rejected)
      .addCase(deleteOwnRecipe.rejected, rejected)
      .addCase(getFavorite.rejected, rejected)
      .addCase(addFavorite.rejected, rejected)
      .addCase(getOwnRecipeByID.rejected, rejectedSingle)
      .addCase(getOneRecipeById.rejected, rejectedSingle),
});

export default ingredientsSlice.reducer;
