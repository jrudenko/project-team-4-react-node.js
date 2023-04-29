import { createSlice } from '@reduxjs/toolkit';
import { getSearchByTitle, getSearchByIngredients } from './searchOperations';

const initialState = {
  searchResult: null,
  totalPages: null,
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getSearchByTitle.fulfilled, (state, action) => {
        state.searchResult = action.payload.searchResult;
        state.totalPages = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchByIngredients.fulfilled, (state, action) => {
        state.searchResult = action.payload.searchResult;
        state.totalPages = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchByTitle.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchByIngredients.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchByTitle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchResult = null;
      })
      .addCase(getSearchByIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchResult = null;
      }),
});

export const searchReducer = searchSlice.reducer;
