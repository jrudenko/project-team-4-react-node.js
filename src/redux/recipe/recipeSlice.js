import { createSlice } from '@reduxjs/toolkit';
import {
  getRecipeById,
  getOwnRecipeById,
  addRecipeToFavorite,
  removeRecipeFromFavorite,
  addToShoppingList,
  removeFromShoppingList,
} from './recipeOperation';
import {
  getRecipeByIdPendingReducer,
  getRecipeByIdFulfilledReducer,
  getRecipeByIdRejectedReducer,
  favoritePendingReducer,
  favoriteRejectedReducer,
  addRecipeToFavoriteFulfilledReducer,
  removeRecipeFromFavoriteFulfilledReducer,
  shoppingListRejectedReducer,
} from './recipeHelpers';

const initialState = {
  recipe: {
    item: null,
    isLoading: false,
    error: null,
  },
  ownRecipe: {
    item: null,
    isLoading: false,
    error: null,
  },
  favorite: {
    isFavorite: false,
    isLoading: false,
    error: null,
  },

  shoppingList: {
    error: null,
  },
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getRecipeById.pending, getRecipeByIdPendingReducer)
      .addCase(getRecipeById.fulfilled, getRecipeByIdFulfilledReducer)
      .addCase(getRecipeById.rejected, getRecipeByIdRejectedReducer)

      .addCase(getOwnRecipeById.pending, getRecipeByIdPendingReducer)
      .addCase(getOwnRecipeById.fulfilled, getRecipeByIdFulfilledReducer)
      .addCase(getOwnRecipeById.rejected, getRecipeByIdRejectedReducer)

      .addCase(addRecipeToFavorite.pending, favoritePendingReducer)
      .addCase(
        addRecipeToFavorite.fulfilled,
        addRecipeToFavoriteFulfilledReducer
      )
      .addCase(addRecipeToFavorite.rejected, favoriteRejectedReducer)

      .addCase(removeRecipeFromFavorite.pending, favoritePendingReducer)
      .addCase(
        removeRecipeFromFavorite.fulfilled,
        removeRecipeFromFavoriteFulfilledReducer
      )
      .addCase(removeRecipeFromFavorite.rejected, favoriteRejectedReducer)

      .addCase(addToShoppingList.pending)
      .addCase(addToShoppingList.fulfilled)
      .addCase(addToShoppingList.rejected, shoppingListRejectedReducer)

      .addCase(removeFromShoppingList.pending)
      .addCase(removeFromShoppingList.fulfilled)
      .addCase(removeFromShoppingList.rejected, shoppingListRejectedReducer),
});

export const recipeReducer = recipeSlice.reducer;
