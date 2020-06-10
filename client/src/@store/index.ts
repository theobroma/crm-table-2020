import { combineReducers } from 'redux';
import filterReducer from './filter/reducer';
import clientsReducer from './clients/reducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  clients: clientsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
