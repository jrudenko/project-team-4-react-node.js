// ------------------ Category List ------------------
// ---- returns an Array with 12 category NAMES ONLY
// ---- use with function "getCategoryList()"
export const getFullCategoryList = state => state.outerRecipes.categoryList;

// ------------------ Categories & Recipes for MAIN PAGE ------------------
// ---- returns an OBJECT with 4 keys.
// ---- Keys contain categories: breakfast, miscellaneous, vegan, desserts
// ---- Values contain 4 recipes for each category
// ---- Use with function "getMainCategories()"
export const getContentForMain = state => state.outerRecipes.mainCategories;

// ------------------ Recipes by Category with LIMIT ------------------
// ---- Limit MUST BE 4 or 12
// ---- returns an Array of Objects with 4 or 12 recipes by requested category
// ---- As an argument you HAVE TO send an Object with category and limit
// ---- Example: const params = {category: 'beef', limit: 4}
// ---- Use with function "getLimitedRecipesByCategory(params)"
export const getLimitedRecipes = state =>
  state.outerRecipes.limitedRecipesByCategory;

// ------------------ ALL Recipes by Category without LIMIT ------------------
// ---- returns an Array of Objects with all recipes by requested category
// ---- As an argument you HAVE TO send a category name (String)
// ---- Example: const category = 'beef';
// ---- Use with function "getAllRecipesByCategory(category)"
export const getAllRecipes = state => state.outerRecipes.allRecipesByCategory;

// ------------------ ONE Recipe ------------------
// ---- returns an OBJECT with full info about Recipe
// ---- As an argument you HAVE TO send Recipe's ID
// ---- Use with function "getOneRecipeById(id)"
export const getSingleRecipe = state => state.outerRecipes.singleRecipe;

// ------------------ Popular Recipes ------------------
// ---- returns an Array of Objects
// ---- Use with function "getPopularRecipes()"
export const getPopular = state => state.outerRecipes.popularRecipes;

// ------------------ Recipes by Query ------------------
// ---- returns an Object with keys: meals and totalHits
// ---- As an argument you HAVE TO send a query (String)
// ---- Use with function "getRecipesByQuery(query)"
export const getRecipesBySearchQuery = state =>
  state.outerRecipes.recipesByQuery;

// ------------------ Additional ------------------
export const getIsCategoryFetching = state =>
  state.outerRecipes.isCategoryFetching;

export const getIsError = state => state.outerRecipes.isError;
