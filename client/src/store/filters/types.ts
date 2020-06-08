import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type FilterType = 'GOLD' | 'SILVER' | 'WOOD' | 'STANDART';

export type FilterItemType = {
  name: FilterType;
  active: boolean;
};

export type FilterListType = {
  data: FilterItemType[];
};

export type FilterActionType = ActionType<typeof actions>;
