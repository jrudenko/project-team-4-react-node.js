export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
