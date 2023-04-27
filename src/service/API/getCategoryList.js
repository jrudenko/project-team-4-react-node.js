import axios from 'axios';

const getCategoryList = async token => {
  try {
    const list = await axios.get(
      'https://yummy-rest-api.yurgo.fun/api/recipes/main-page'
    );

    // const result = responseReceived.data.result.map(category =>
    //   categoryOptimization(category)
    // );
    return list.data.result;
  } catch (error) {
    return [];
  }
};

export default getCategoryList;
