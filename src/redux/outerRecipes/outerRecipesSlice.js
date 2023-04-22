import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoryList,
  getLimitedRecipesByCategory,
  getAllRecipesByCategory,
  getPopularRecipes,
  getMainCategories,
  getRecipesByQuery,
} from './outerRecipesOperations';

import { getRecipesByIngredient } from 'redux/ingredients/ingredientsOperations';

import { logOut } from 'redux/auth/operations';

const pending = state => {
  state.isCategoryFetching = true;
};
const rejected = state => {
  state.isCategoryFetching = false;
};

const initialState = {
  isCategoryFetching: false,
  categoryList: [],
  mainCategories: null,
  limitedRecipesByCategory: [],
  allRecipesByCategory: [],
  singleRecipe: null,
  popularRecipes: [],
  recipesByQuery: {
    recipes: null,
    totalHits: 0,
  },
  isError: false,
};

export const outerRecipesSlice = createSlice({
  name: 'outerRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getMainCategories.fulfilled, (state, { payload }) => {
        state.mainCategories = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getLimitedRecipesByCategory.fulfilled, (state, { payload }) => {
        state.limitedRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getAllRecipesByCategory.fulfilled, (state, { payload }) => {
        state.allRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })
      // .addCase(getOneRecipeById.fulfilled, (state, { payload }) => {
      //   state.singleRecipe = payload;
      //   state.isCategoryFetching = false;
      // })
      .addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
        state.popularRecipes = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getRecipesByQuery.fulfilled, (state, { payload }) => {
        state.recipesByQuery.recipes = payload;
        // state.recipesByQuery.totalHits = payload.totalHits;
        state.isCategoryFetching = false;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))
      .addCase(getRecipesByIngredient.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.recipesByQuery.recipes = payload;
        // state.recipesByQuery.totalHits = payload.totalHits;
        state.isCategoryFetching = false;
      })
      .addCase(getMainCategories.pending, pending)
      .addCase(getLimitedRecipesByCategory.pending, pending)
      .addCase(getAllRecipesByCategory.pending, pending)
      // .addCase(getOneRecipeById.pending, pending)
      .addCase(getPopularRecipes.pending, pending)
      .addCase(getRecipesByQuery.pending, pending)
      .addCase(getRecipesByIngredient.pending, pending)

      .addCase(getMainCategories.rejected, rejected)
      .addCase(getLimitedRecipesByCategory.rejected, rejected)
      .addCase(getAllRecipesByCategory.rejected, rejected)
      // .addCase(getOneRecipeById.rejected, rejected)
      .addCase(getPopularRecipes.rejected, rejected)
      .addCase(getRecipesByQuery.rejected, state => {
        state.isCategoryFetching = false;
        state.isError = true;
        state.recipesByQuery.recipes = null;
        state.recipesByQuery.totalHits = 0;
      })
      .addCase(getRecipesByIngredient.rejected, state => {
        state.isCategoryFetching = false;
        state.isError = true;
        state.recipesByQuery.recipes = null;
        state.recipesByQuery.totalHits = 0;
      }),
});

export default outerRecipesSlice.reducer;
