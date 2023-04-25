import axios from 'axios';

axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2RhYjA2ODJhZGUzMDA2ZjY3ZWNhZSIsImlhdCI6MTY4MTc2MzMwNX0.xgcSynbdL8pnbV4_bItE5Tagzj7XVNcGXClp35qD59Q`

export const getFavoriteRecipes = async () => {
  try {
    const { data } = await axios.get(`/favorite`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const addToFavorites = async id => {
  return await axios.post(`/favorite/${id}`);
};

export const deleteFavoriteRecipe = async id => {
  try {
    const { data } = await axios.delete(`/favorite/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyRecipes = async () => {
  try {
    const { data } = await axios.get(`/own-recipes`);
    return data.recipes;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMyRecipe = async id => {
  try {
    const { data } = await axios.delete(`/own-recipes/id/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateSubscribe = async () => {
  try {
    const { data } = await axios.patch('/subscribe', {
      subscribe: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPopularRecipes = async () => {
  try {
    const { data } = await axios.get(`/recipes/popular-recipe`);
    return data.data.result;
  } catch (error) {
    console.error(error);
  }
};
export const getRecipeById = async id => {
  return await axios.get(`/recipes/${id}`);
};
