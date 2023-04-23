import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getPopularList } from './popularOperation';
import { getActions, getPopularFulfilledReducer } from './popularHelpers';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
} from '../helpers/sharedReducerHelpers';

const initialState = {
  popular: [],
  isLoading: false,
  error: null,
};

const popularSlice = createSlice({
  name: 'popular',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getPopularList.fulfilled, getPopularFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

export const popularReducer = popularSlice.reducer;
