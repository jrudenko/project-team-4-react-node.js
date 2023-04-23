export const getRecipeByIdPendingReducer = state => {
  state.recipe.isLoading = true;
};
export const getRecipeByIdFulfilledReducer = (state, action) => {
  state.recipe.item = action.payload;
  state.favorite.isFavorite = action.payload.favorite;
  state.recipe.isLoading = false;
  state.recipe.error = null;
};
export const getRecipeByIdRejectedReducer = (state, action) => {
  state.recipe.isLoading = false;
  state.recipe.error = action.payload;
};

export const getOwnRecipeByIdPendingReducer = state => {
  state.ownRecipe.isLoading = true;
};
export const getOwnRecipeByIdFulfilledReducer = (state, action) => {
  state.ownRecipe.item = action.payload;
  state.ownRecipe.isLoading = false;
  state.ownRecipe.error = null;
};
export const getOwnRecipeByIdRejectedReducer = (state, action) => {
  state.ownRecipe.isLoading = false;
  state.ownRecipe.error = action.payload;
};

export const favoritePendingReducer = state => {
  state.favorite.isLoading = true;
};
export const favoriteRejectedReducer = (state, action) => {
  state.favorite.isLoading = false;
  state.favorite.error = action.payload;
};
export const addRecipeToFavoriteFulfilledReducer = state => {
  state.favorite.isFavorite = true;
  state.favorite.isLoading = false;
  state.favorite.error = false;
};
export const removeRecipeFromFavoriteFulfilledReducer = state => {
  state.favorite.isFavorite = false;
  state.favorite.isLoading = false;
  state.favorite.error = false;
};

export const shoppingListRejectedReducer = (state, action) => {
  state.shoppingList.error = action.payload;
};
