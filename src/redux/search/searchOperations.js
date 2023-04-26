import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://yummy-rest-api.yurgo.fun/api';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2RhYjA2ODJhZGUzMDA2ZjY3ZWNhZSIsImlhdCI6MTY4MTc2MzMwNX0.xgcSynbdL8pnbV4_bItE5Tagzj7XVNcGXClp35qD59Q`;

export const getSearchByTitle = createAsyncThunk(
  'search',
  async ({ query, type }, thunkApi) => {
    try {
      const { data } = await axios.get(`/search/?query=${query}&type=${type}`);
      return data.searchResult;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSearchByIngredients = async (
  query,
  page = 1,
  limit = 12,
  sort = 'popular'
) => {
  try {
    const { data } = await axios.get(
      `/recipes/search/ingredient/${query.trim()}?page=${page}&limit=${limit}&sort=${sort}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/id/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
