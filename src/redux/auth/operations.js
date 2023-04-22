import {
  signUpUserAPI,
  logInUserAPI,
  logOutUserAPI,
  updateUserInfoAPI,
  updateUserAvatarAPI,
  getCurrentUserAPI,
} from '../../service/API/Auth&UserAPI.js';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://yummy-rest-api.yurgo.fun/';

// // Utility to add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// /*
//  * POST @ /users/signup
//  * body: { name, email, password }
//  */
// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/auth/register', credentials);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { email, password } = user;
      await signUpUserAPI(user);
      const data = await logInUserAPI({ email, password });
      token.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error);
    }
  }
);

// /*
//  * POST @ /users/login
//  * body: { email, password }
//  */
// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/auth/login', credentials);
//       // After successful login, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await logInUserAPI(user);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error);
    }
  }
);

// /*
//  * POST @ /users/logout
//  * headers: Authorization: Bearer token
//  */
// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     // After a successful logout, remove the token from the HTTP header
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUserAPI();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
/*
//  * GET @ /users/current
//  * headers: Authorization: Bearer token
//  */
// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const updateUserInfo = createAsyncThunk(
  'auth/update',
  async (user, { rejectWithValue }) => {
    try {
      const data = await updateUserInfoAPI(user);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/avatar',
  async (avatar, { rejectWithValue }) => {
    try {
      const data = await updateUserAvatarAPI(avatar);
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getCurrentUserAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
