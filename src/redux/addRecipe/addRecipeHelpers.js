import {
  getCategoryList,
  getIngredientsList,
  addRecipe,
} from './addRecipeOperation';

const extraActions = [getCategoryList, getIngredientsList, addRecipe];
export const getActions = type => extraActions.map(action => action[type]);

export const getCategoryFulfilledReducer = (state, action) => {
  state.category = action.payload;
};

export const getIngredientsFulfilledReducer = (state, action) => {
  state.ingredients = action.payload;
};

export const addRecipeFulfilledReducer = (state, action) => {
  console.log(action.payload);
  state.recipe = action.payload;
};
