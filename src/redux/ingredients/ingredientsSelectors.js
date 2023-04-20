// ------------------ Ingredients List ------------------
// ---- returns an Array of Objects
// ---- this operation will be called during user login
// ---- the resut will be persisted into local storage
// ---- you DON'T need to dispatch operation, just use Selector (!)
// ---- works in tandem with "getAllIngredients()"
export const getIngredients = state => state.ingredients.ingredients;

// ------------------ Recipes by Ingredient ------------------
// ---- returns an Object with keys: meals and totalHits
// ---- As an argument you HAVE TO send an ingredient name (String)
// ---- Example: const ingredient = 'cucumber';
// ---- Use with function "getRecipesByIngredient(ingredient)"
export const getRecipesListByIngredient = state =>
  state.ingredients.recipesByIngredients;

// ------------------ Shopping List ------------------
// ---- returns an array
// ---- Use with function "getShoppingIngredient()"
export const getShoppingList = state => state.ingredients.shoppingList;

// ------------------ Additional ------------------
export const getIsIngredientsFetching = state =>
  state.ingredients.isIngredientsFetching;
