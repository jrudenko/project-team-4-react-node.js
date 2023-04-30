import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://yummy-rest-api.yurgo.fun/api';

export const getSearchByTitle = createAsyncThunk(
  'search/byTitle',
  async ({ query, page = 1, perPage = 12 }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/search/?query=${query}&page=${page}&perPage=${perPage}`
      );
      return data;
    } catch (error) {
      toast.error('Something happened during request. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSearchByIngredients = createAsyncThunk(
  'search/byIngredient',
  async ({ query, page = 1, perPage = 12 }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/ingredients/?query=${query}&page=${page}&perPage=${perPage}`
      );
      return data;
    } catch (error) {
      toast.error('Something happened during request. Please try again.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/id/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
