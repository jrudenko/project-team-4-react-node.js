export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// // ------------- FAVORITE -------------
// export const getFavoriteRecipes = state => state.auth.favorites.recipes;
// export const getTotalFavoriteRecipes = state => state.auth.favorites.total;

// // ------------------ SUPPLEMENTARY ------------------
// export const getIsOwnRecipesFetching = state => state.auth.isOwnRecipesFetching;
