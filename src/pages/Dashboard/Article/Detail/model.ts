import { Effect, ImmerReducer } from 'umi';
import * as CategoryService from './services/Category';
import * as CategoryEntity from './entities/Category';
import * as Action from './action';

export const NS = 'article/detail';

export interface State {
  list: CategoryEntity.Category[];
}

export interface CategoryModelState {
  namespace: string;
  state: State;
  effects: {
    [Action.ActionTypes.Fetch]: Effect;
  };
  reducers: {
    [Action.ActionTypes.FetchSucceeded]: ImmerReducer<
      State,
      ReturnType<typeof Action.fetchSucceeded>
    >;
  };
}

const defaultState: State = {
  list: [],
};

const Category: CategoryModelState = {
  namespace: NS,
  state: defaultState,
  effects: {
    *[Action.ActionTypes.Fetch](_, { call }) {
      const response = yield call(CategoryService.fetchCategory);
      console.log(response);
    },
  },
  reducers: {
    [Action.ActionTypes.FetchSucceeded]: () => {
      return defaultState;
    },
  },
};

export default Category;
