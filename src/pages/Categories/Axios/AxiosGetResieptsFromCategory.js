import axios from 'axios';

const fetchRecipesFromCategory = async category => {
  try {
    const response = await axios.get(`/recipes?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchRecipesFromCategory;
