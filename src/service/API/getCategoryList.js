import axios from 'axios';

const getCategoryList = async token => {
  // const recipeOptimization = recipe => {
  //   return {
  //     id: recipe._id,
  //     title: recipe.title,
  //     preview: recipe.preview,
  //     category: recipe.category,
  //   };
  // };

  // const categoryOptimization = category =>
  //   category.map(recipe => recipeOptimization(recipe));
  try {
    const list = await axios.get(
      'https://yummy-rest-api.yurgo.fun/api/recipes/main-page'
    );

    // const result = responseReceived.data.result.map(category =>
    //   categoryOptimization(category)
    // );
    return list.data.result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getCategoryList;
