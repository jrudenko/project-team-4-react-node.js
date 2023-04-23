import axios from 'axios';
export const getRecipesByCategory = async (categoryName, page = 1) => {
  try {
    const res = await axios.get(
      `/recipes/category/${categoryName}?page=${page}`
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
