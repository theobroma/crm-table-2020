import { ActionType } from 'typesafe-actions';
import { DiscountType, GenderType } from '../../@types';
import { actions } from './actions';

export type ClientsItemType = {
  _id: string; // maybe rf to type ObjectID= typeof import("mongodb").ObjectID;
  fullName: string;
  discountType: DiscountType;
  spentSum: number;
  discountProcent: number;
  gender: GenderType;
};

export type ClientsListType = {
  data: ClientsItemType[];
};

export type ClientsActionType = ActionType<typeof actions>;
