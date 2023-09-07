import axios from 'axios';

const getCategoryList = async token => {
  try {
    const list = await axios.get(
      // 'https://yummy-rest-api.yurgo.fun/api/recipes/main-page'
      // 'https://yummy-rest-api-t74o.onrender.com/api/recipes/main-page'
      'https://tiny-pink-ray-fez.cyclic.cloud/api/recipes/main-page'
    );
    return list.data.result;
  } catch (error) {
    return [];
  }
};

export default getCategoryList;
