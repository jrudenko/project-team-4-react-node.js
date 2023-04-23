import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPopularList = createAsyncThunk(
  'popular/getPopularList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/popular-recipe');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
