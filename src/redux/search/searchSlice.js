// const { createSlice } = require('@reduxjs/toolkit');
import { createSlice } from '@reduxjs/toolkit';
import { getSearchByTitle } from './searchOperations';

const initialState = {
  searchResult: null,
  isLoading: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  // reducers: {
  //   updateSearchQuery(state, action) {
  //     state.searchQuery = action.payload;
  //   },
  //   updateSearchType(state, action) {
  //     state.searchType = action.payload;
  //   },
  //   updateSearchResult(state, action) {
  //     state.searchResult = action.payload;
  //   },
  //   clearSearch() {
  //     return initialState;
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(getSearchByTitle.fulfilled, (state, action) => {
        state.searchResult = action.payload;
        state.isLoading = false;
      })
      .addCase(getSearchByTitle.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchByTitle.rejected, state => {
        state.isLoading = false;
      }),
});

// export const {
//   updateSearchQuery,
//   updateSearchResult,
//   updateSearchType,
//   clearSearch,
// } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
