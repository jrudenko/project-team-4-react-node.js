import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

// axios.defaults.baseURL = 'https://yummy-rest-api.yurgo.fun/api';
axios.defaults.baseURL = 'https://yummy-rest-api-t74o.onrender.com/api';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      setAuthToken(res.data.user.token);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-right',
      });
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthToken(res.data.user.token);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-right',
      });
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      clearAuthToken();
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-right',
      });
      return rejectWithValue;
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (data, thunkApi) => {
    const state = thunkApi.getState();

    if (!state.auth.token) {
      return thunkApi.rejectWithValue('No valid token');
    }

    setAuthToken(state.auth.token);

    try {
      const res = await axios.get('auth/current');

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`auth/`, user, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (avatar, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/auth/user/avatar', avatar);
      return data;
    } catch (error) {
      toast.error('Oops, something wrong');
      return rejectWithValue(error.message);
    }
  }
);
export const updateInfo = createAsyncThunk(
  'auth/update',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put('/auth/user/update', user);
      const { name, email } = data;
      return { name, email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

