import { combineReducers } from 'redux';
import filterReducer from './filter/reducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
