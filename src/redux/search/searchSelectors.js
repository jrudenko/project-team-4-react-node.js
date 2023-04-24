// export const selectSearchQuery = s => {
//   return s.search.searchQuery;
// };
export const selectIsLoading = state => {
  return state.search.isLoading;
};
export const selectSearchResult = state => {
  return state.search.searchResult;
};
