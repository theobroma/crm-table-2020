import { RootState } from '../index';
import { FilterItemType } from './types';

export const filterSelector = (state: RootState) => {
  return state.filter;
};

export const activeFiltersSelector = (state: RootState) => {
  return state.filter.data.filter((filter: FilterItemType) => {
    return filter.active;
  });
};
