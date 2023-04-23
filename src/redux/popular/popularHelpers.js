import { getPopularList } from './popularOperation';

const extraActions = [getPopularList];
export const getActions = type => extraActions.map(action => action[type]);

export const getPopularFulfilledReducer = (state, action) => {
  state.popular = action.payload;
};
