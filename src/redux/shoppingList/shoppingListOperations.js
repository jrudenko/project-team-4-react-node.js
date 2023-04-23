import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getShoppingList,
  deleteShoppingItem,
} from '../../service/API/shoppingList';

export const getList = createAsyncThunk(
  'shoppings/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const lst = await getShoppingList();
      return lst;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'shoppings/deleteItem',
  async (id, { rejectWithValue }) => {
    try {
      const shoppingItem = await deleteShoppingItem(id);
      return shoppingItem;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
