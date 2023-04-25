import axios from 'axios';

// const getCategoryList = async token => {
//   const recipeOptimization = recipe => {
//     return {
//       id: recipe._id,
//       title: recipe.title,
//       preview: recipe.preview,
//       category: recipe.category,
//     };
//   };

//   const categoryOptimization = category =>
//     category.map(recipe => recipeOptimization(recipe));

//   const list = await fetch(
//     'https://yummy-rest-api.yurgo.fun/api/recipes/main-page',
//     {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   const responseReceived = await list.json();
//   const result = responseReceived.result.map(category =>
//     categoryOptimization(category)
//   );
//   return result;
// };

// export default getCategoryList;

const getCategoryList = async token => {
  const recipeOptimization = recipe => {
    return {
      id: recipe._id,
      title: recipe.title,
      preview: recipe.preview,
      category: recipe.category,
    };
  };

  const categoryOptimization = category =>
    category.map(recipe => recipeOptimization(recipe));

  // const list = await fetch(
  //   'https://yummy-rest-api.yurgo.fun/api/recipes/main-page',
  //   {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );

  const list = axios.get(
    'https://yummy-rest-api.yurgo.fun/api/recipes/main-page'
  );

  const responseReceived = await list();
  const result = responseReceived.result.map(category =>
    categoryOptimization(category)
  );
  return result;
};

export default getCategoryList;
