import axios from 'axios';

const fetchCategoryListFromAPI = async () => {
  try {
    const response = await axios.get('/recipes/category-list');
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export default fetchCategoryListFromAPI;
