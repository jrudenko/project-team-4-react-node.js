import axios from 'axios';

const getCategoryList = async token => {
  try {
    const list = await axios.get(
      'https://yummy-rest-api.yurgo.fun/api/recipes/main-page'
    );

    const responseReceived = await list;
    return responseReceived.data.result;
  } catch (error) {
    return [];
  }
};

export default getCategoryList;
