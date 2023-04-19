// ------------------ Own Recipes ------------------
// ---- returns an Array of Objects
// ---- Use with function "getOwnRecipes()"
export const getCustomRecipes = state => state.ownRecipes.ownRecipes.recipes;
export const getTotalCustomRecipes = state => state.ownRecipes.ownRecipes.total;

// ------------------ Favorites ------------------
// ---- returns an Array of Objects
// ---- Use with function "getFavorite()"
export const getFavoriteRecipes = state => state.ownRecipes.favorites.recipes;
export const getTotalFavoriteRecipes = state =>
  state.ownRecipes.favorites.total;

// ------------------ Own Recipe by ID & Outer recipe by ID ------------------
// ---- returns an Object
// ---- Use with function "getOwnRecipeByID('4657855345')"
export const getSingleOwnRecipe = state => state.ownRecipes.singleRecipe;

// ------------------ Additional ------------------
export const getIsOwnRecipesFetching = state =>
  state.ownRecipes.isOwnRecipesFetching;
