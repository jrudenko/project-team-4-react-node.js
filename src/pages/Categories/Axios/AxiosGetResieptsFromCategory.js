import axios from 'axios';
// https://yummy-rest-api.yurgo.fun/api/recipes/category/:category
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2RhYjA2ODJhZGUzMDA2ZjY3ZWNhZSIsImlhdCI6MTY4MTc2MzMwNX0.xgcSynbdL8pnbV4_bItE5Tagzj7XVNcGXClp35qD59Q';

const API = axios.create({
  baseURL: 'https://yummy-rest-api.yurgo.fun/api/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
const fetchRecipesFromCategory = async category => {
  try {
    const response = await API.get(`recipes/category/${category}`);

    const result = response.data.result.map(recip => {
      return { id: recip._id, name: recip.title, preview: recip.preview };
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchRecipesFromCategory;
