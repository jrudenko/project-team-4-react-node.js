export const selectRecipeById = state => state.recipe.recipe.item;
export const selectRecipeIsLoading = state => state.recipe.recipe.isLoading;
export const selectRecipeError = state => state.recipe.recipe.error;

export const selectOwnRecipeById = state => state.recipe.ownRecipe.item;
export const selectOwnRecipeIsLoading = state =>
  state.recipe.ownRecipe.isLoading;
export const selectOwnRecipeError = state => state.recipe.ownRecipe.error;

export const selectFavorite = state => state.recipe.favorite.isFavorite;
export const selectFavoriteIsLoading = state => state.recipe.favorite.isLoading;
export const selectFavoriteError = state => state.recipe.favorite.error;

export const selectShoppingListError = state => state.recipe.shoppingList.error;
