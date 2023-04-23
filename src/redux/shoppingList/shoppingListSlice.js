import { createSlice } from '@reduxjs/toolkit';
import { deleteItem, getList } from './shoppingListOperations';

const initialState = {
  items: [],
  isLoading: false,
  isDeleting: false,
  error: null,
};

export const shoppingsSlice = createSlice({
  name: 'shoppings',
  initialState,
  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(getList.pending, state => {
        state.isLoading = true;
        state.items = [];
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.items = action.payload.shoppingList;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteItem.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = action.payload.shoppingList;
        state.isDeleting = false;
        state.error = null;
      })
      .addMatcher(isPendingAction, state => {
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isDeleting = false;
        state.isLoading = false;
        state.error = action.payload.message;
      }),
});

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}

export const shoppingsReducer = shoppingsSlice.reducer;
