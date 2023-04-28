// const { createSlice } = require('@reduxjs/toolkit');
import { createSlice } from '@reduxjs/toolkit';
import { getSearchByTitle } from './searchOperations';

const initialState = {
  searchResult: null,
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getSearchByTitle.fulfilled, (state, action) => {
        state.searchResult = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchByTitle.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchByTitle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.searchResult = null;
      }),
});

export const searchReducer = searchSlice.reducer;
