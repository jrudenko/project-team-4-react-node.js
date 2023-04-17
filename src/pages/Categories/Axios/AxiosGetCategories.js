import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yummy-rest-api.yurgo.fun/api/',
});

const fetchCategoryListFromAPI = async () => {
  try {
    const response = await api.get('/recipes/category-list');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export default fetchCategoryListFromAPI;
