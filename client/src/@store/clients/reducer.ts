import { createReducer } from 'typesafe-actions';
import { TOGGLE_FILTER } from './constants';
import { clientsArr } from '../../@helpers/mockclients';
import { ClientsListType, ClientsActionType } from './types';

const initialState: ClientsListType = {
  data: clientsArr,
};

const clientsReducer = createReducer<ClientsListType, ClientsActionType>(
  initialState,
  {
    [TOGGLE_FILTER]: (state, { payload: filterName }) => {
      return {
        ...state,
        data: state.data.map((filter: any) => {
          if (filter.name === filterName) {
            return { ...filter, active: !filter.active };
          }
          return filter;
        }),
      };
    },
  }
);

export default clientsReducer;
