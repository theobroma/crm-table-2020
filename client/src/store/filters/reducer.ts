import { createReducer } from 'typesafe-actions';
import { TOGGLE_FILTER } from './constants';

import { FilterListType, FilterItemType, FilterActionType } from './types';

const initialState: FilterListType = {
  data: [
    { name: 'GOLD', active: false },
    { name: 'SILVER', active: true },
    { name: 'WOOD', active: true },
    { name: 'STANDART', active: false },
  ],
};

const filterReducer = createReducer<FilterListType, FilterActionType>(
  initialState,
  {
    [TOGGLE_FILTER]: (state, { payload: filterName }) => {
      return {
        ...state,
        data: state.data.map((filter: FilterItemType) => {
          if (filter.name === filterName) {
            return { ...filter, active: !filter.active };
          }
          return filter;
        }),
      };
    },
  }
);

export default filterReducer;
