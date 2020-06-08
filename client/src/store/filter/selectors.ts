import { RootState } from '../index';

export const filterSelector = (state: RootState) => {
  return state.filter;
};
