import axios from 'axios';

const getCategoryList = async token => {
  try {
    const list = await axios.get(
      'https://yummy-rest-api.yurgo.fun/api/recipes/main-page'
    );
    return list.data.result;
  } catch (error) {
    return [];
  }
};

export default getCategoryList;
