import { createSlice } from '@reduxjs/toolkit';

import {
  registrationUser,
  loginUser,
  logoutUser,
  refreshUser,
  updateUserProfile,
} from './operations';

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
        // state.token = action.payload.token;
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
        state.user.avatar = action.payload.user.avatarURL;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
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
        state.user.avatar = action.payload.avatarURL;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
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
        if (action.payload.avatarURL) {
          state.user.avatar = action.payload.avatarURL;
        }
        state.user.name = action.payload.name;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.payload.message;
      }),
});

export const authReducer = userSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// // import { register, logIn, logOut, refreshUser } from './operations';
// import {
//   logIn,
//   signUp,
//   logOut,
//   updateUserInfo,
//   getCurrentUser,
// } from './operations';

// const pending = state => {
//   state.isUserFetching = true;
// };
// const rejected = state => {
//   state.isUserFetching = false;
//   state.isLoggedIn = false;
// };

// const initialState = {
//   accessToken: null,
//   isLoggedIn: false,
//   isUserFetching: false,
//   userData: {
//     email: null,
//     name: null,
//     avatar: null,
//   },
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(signUp.fulfilled, (state, { payload }) => {
//         state.userData.email = payload.user.email;
//         state.userData.name = payload.user.name;
//         state.userData.avatar = payload.user.avatar;

//         state.accessToken = payload.accessToken;
//         state.isLoggedIn = true;
//         state.isUserFetching = false;
//       })
//       .addCase(logIn.fulfilled, (state, { payload }) => {
//         state.userData.email = payload.user.email;
//         state.userData.name = payload.user.name;
//         state.userData.avatar = payload.user.avatarURL;

//         state.accessToken = payload.accessToken;
//         state.isLoggedIn = true;
//         state.isUserFetching = false;
//       })
//       .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
//         state.userData.name = payload.user.name;
//         state.userData.avatar = payload.user.avatarURL;
//       })
//       .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
//         state.userData.name = payload.user.name;
//         state.userData.avatar = payload.user.avatarURL;
//         state.accessToken = payload.accessToken;
//         state.isUserFetching = false;
//       })
//       .addCase(logOut.fulfilled, () => ({ ...initialState }))

//       .addCase(signUp.pending, pending)
//       .addCase(logIn.pending, pending)
//       .addCase(getCurrentUser.pending, pending)

//       .addCase(signUp.rejected, rejected)
//       .addCase(getCurrentUser.rejected, () => ({ ...initialState }))
//       .addCase(logIn.rejected, rejected),
// });

// export default authSlice.reducer;

// // const initialState = {
// //   user: { name: null, email: null },
// //   token: null,
// //   isLoggedIn: false,
// //   isRefreshing: false,
// // };

// // const authSlice = createSlice({
// //   name: 'auth',
// //   initialState,
// //   extraReducers: {
// //     [register.fulfilled](state, action) {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //       state.isLoggedIn = true;
// //     },
// //     [logIn.fulfilled](state, action) {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //       state.isLoggedIn = true;
// //     },
// //     [logOut.fulfilled](state) {
// //       state.user = { name: null, email: null };
// //       state.token = null;
// //       state.isLoggedIn = false;
// //     },
// //     [refreshUser.pending](state) {
// //       state.isRefreshing = true;
// //     },
// //     [refreshUser.fulfilled](state, action) {
// //       state.user = action.payload;
// //       state.isLoggedIn = true;
// //       state.isRefreshing = false;
// //     },
// //     [refreshUser.rejected](state) {
// //       state.isRefreshing = false;
// //     },
// //   },
// // });

// // export const authReducer = authSlice.reducer;
