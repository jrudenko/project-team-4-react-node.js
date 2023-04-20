import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.yurgo.fun/';

//  ------------- OWN RECIPE -------------

export const getOwnRecipesAPI = (page, per_page) => {
  if (page && per_page) {
    return axios
      .get(`/own-recipes?page=${page}&per_page=${per_page}`)
      .then(({ data }) => {
        return data;
      });
  }
  return axios.get(`/own-recipes`).then(({ data }) => {
    return data;
  });
};

export const addOwnRecipeAPI = body => {
  return axios.post('/own-recipes', body).then(({ data }) => {
    return data;
  });
};

export const deleteOwnRecipeAPI = id => {
  return axios.delete(`/own-recipes/${id}`).then(({ data }) => {
    return data;
  });
};

export const getOwnRecipeByIdAPI = id => {
  return axios.get(`/own-recipes/${id}`).then(({ data }) => {
    return data;
  });
};

// ------------- FAVORITE -------------

export const addFavoriteAPI = body => {
  return axios.post('/favorite', body).then(({ data }) => {
    return data;
  });
};

export const getFavoriteAPI = (page, per_page) => {
  if (page && per_page) {
    return axios
      .get(`/favorite?page=${page}&per_page=${per_page}`)
      .then(({ data }) => {
        return data;
      });
  }
  return axios.get(`/favorite`).then(({ data }) => {
    return data;
  });
};

export const removeFavoriteAPI = id => {
  return axios.delete(`/favorite/${id}`).then(({ data }) => {
    return data;
  });
};

// ------------- SHOPPING_LIST -------------

export const addShoppingIngredientAPI = body => {
  return axios.post('/shopping-list', body).then(({ data }) => {
    return data;
  });
};

export const getShoppingIngredientAPI = () => {
  return axios.get('/shopping-list').then(({ data }) => {
    return data;
  });
};

export const removeShoppingIngredientAPI = id => {
  return axios.delete(`/shopping-list/${id}`).then(({ data }) => {
    return data;
  });
};
