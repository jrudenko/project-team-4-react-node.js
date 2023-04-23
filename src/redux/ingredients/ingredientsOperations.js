import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllIngredientsAPI,
  getRecipesByIngredientAPI,
} from 'service/API/TheMealAPI';

import {
  getShoppingIngredientAPI,
  removeShoppingIngredientAPI,
  addShoppingIngredientAPI,
} from 'service/API/OwnRecipesAPI';

export const getAllIngredients = createAsyncThunk(
  'ingredients/list',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllIngredientsAPI();
      return data.meals;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'ingredients/recipes',
  async (params, { rejectWithValue }) => {
    try {
      const { ingredient, page, per_page } = params;
      const data = await getRecipesByIngredientAPI(ingredient, page, per_page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getShoppingIngredient = createAsyncThunk(
  'ingredients/getShoppingList',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getShoppingIngredientAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const addShoppingIngredient = createAsyncThunk(
  'ingredients/addShoppingIngredient',
  async (body, { rejectWithValue }) => {
    try {
      const data = await addShoppingIngredientAPI(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeShoppingIngredient = createAsyncThunk(
  'ingredients/removeShoppingIngredient',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeShoppingIngredientAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
