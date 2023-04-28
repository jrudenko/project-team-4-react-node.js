import { createSlice } from '@reduxjs/toolkit';

import {
  registrationUser,
  loginUser,
  logoutUser,
  refreshUser,
  updateUserProfile,
} from './operations';

// state.auth.user;

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
  isSent: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(registrationUser.pending, state => {
        state.isLoading = true;
        state.isSent = false;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.isSent = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
        state.isSent = false;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.avatar = action.payload.user.avatar;
        state.user.id = action.payload.user._id;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(logoutUser.pending, state => state)
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        // state.user.name = action.payload.user.name;
        state.user.avatar = action.payload.data.user.avatar;
        state.user.name = action.payload.data.user.name;
        state.user.email = action.payload.data.user.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload.message;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
      })
      .addCase(updateUserProfile.pending, state => state)
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        if (action.payload.data.updatedUser.avatar) {
          state.user.avatar = action.payload.data.updatedUser.avatar;
        }
        state.user.name = action.payload.data.updatedUser.name;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.payload.message;
      }),
});

export const authReducer = userSlice.reducer;
