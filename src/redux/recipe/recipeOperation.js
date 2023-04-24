import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRecipeById = createAsyncThunk(
  'recipe/getRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/id/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnRecipeById = createAsyncThunk(
  'recipe/getOwnRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/own-recipes/id/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecipeToFavorite = createAsyncThunk(
  'recipe/addRecipeToFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/favorite/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeRecipeFromFavorite = createAsyncThunk(
  'recipe/removeRecipeFromFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorite/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  'recipe/addToShoppingList',
  async (product, thunkAPI) => {
    try {
      const response = await axios.patch(`/shopping-list`, product);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromShoppingList = createAsyncThunk(
  'recipe/removeFromShoppingList',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/shopping-list/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
