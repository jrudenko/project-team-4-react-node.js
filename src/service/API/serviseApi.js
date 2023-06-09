import axios from 'axios';

export const getFavoriteRecipes = async () => {
  try {
    const { data } = await axios.get(`/favorite?page=0`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const addToFavorites = async _id => {
  return await axios.post(`/favorite/${_id}`);
};

export const deleteFavoriteRecipe = async _id => {
  try {
    const { data } = await axios.delete(`/favorite/${_id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyRecipes = async (page = 1, pageSize = 12) => {
  try {
    const { data } = await axios.get(
      `/ownRecipes/?pageNumber=${page}&pageSize=${pageSize}`
    );
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMyRecipe = async _id => {
  try {
    const { data } = await axios.delete(`/ownRecipes/${_id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateSubscribe = async () => {
  try {
    const { data } = await axios.post('/subscribe', {
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

export const getIngredientsList = async () => {
  return await axios.get(`/ingredients/list`);
};
