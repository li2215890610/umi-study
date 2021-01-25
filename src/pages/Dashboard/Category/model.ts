import { Effect, ImmerReducer } from 'umi';
import { removeNS } from '@/utils/action';
import { message } from 'antd';
import * as Service from './services/Category';
import * as Entity from './entities/Category';
import * as Action from './action';

export const NS = 'category';
export type Category = Entity.Category;

export interface State {
  list: Service.CategoryListFetchResult[];
}

export interface CategoryModelState {
  namespace: string;
  state: State;
  effects: {
    [Action.ActionTypes.Fetch]: Effect;
    [Action.ActionTypes.Sort]: Effect;
    [Action.ActionTypes.Update]: Effect;
    [Action.ActionTypes.Del]: Effect;
    [Action.ActionTypes.Create]: Effect;
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
      const response = yield call(Service.fetchCategory);
      console.log(response);
    },
    *[Action.ActionTypes.Sort]({ payload }, { call, put }) {
      const params: Service.CategoryListUpdateParams = payload;
      yield call(Service.updateCategoryList, params);
      yield put(removeNS(Action.fetchSucceeded(payload), NS));
      message.success('排序成功');
    },
    *[Action.ActionTypes.Update]({ payload }, { call, put, select }) {
      const list = (yield select())[NS];
      const newList: Category[] = [...list];
      const index = newList.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        newList[index] = payload;
        yield call(Service.updateCategoryList, newList);
        yield put(removeNS(Action.fetchSucceeded(newList), NS));
        message.success('修改成功');
      }
    },
    *[Action.ActionTypes.Del]({ payload }, { call, put, select }) {
      const list: Category[] = (yield select())[NS];
      const newList: Category[] = list.filter(item => item.id !== payload.id);
      yield call(Service.updateCategoryList, newList);
      yield put(removeNS(Action.fetchSucceeded(newList), NS));
      message.success('删除成功');
    },
    *[Action.ActionTypes.Create]({ payload }, { call, put }) {
      const params: Service.CategoryListCreateParams = {
        name: payload.name,
      };
      yield call(Service.createCategoryList, params);
      yield put(removeNS(Action.fetch(), NS));
      message.success('创建成功');
      payload.onSuccess();
    },
  },
  reducers: {
    [Action.ActionTypes.FetchSucceeded]: () => {
      return defaultState;
    },
  },
};

export default Category;
