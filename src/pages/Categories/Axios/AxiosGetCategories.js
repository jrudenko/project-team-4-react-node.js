import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2RhYjA2ODJhZGUzMDA2ZjY3ZWNhZSIsImlhdCI6MTY4MTc2MzMwNX0.xgcSynbdL8pnbV4_bItE5Tagzj7XVNcGXClp35qD59Q';

const API = axios.create({
  baseURL: 'https://yummy-rest-api.yurgo.fun/api/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const fetchCategoryListFromAPI = async () => {
  try {
    const response = await API.get('/recipes/category-list');
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
};

export default fetchCategoryListFromAPI;
