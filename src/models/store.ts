import { Effect, Reducer } from 'umi';
import { fetchStore, StoreFetchResult } from '@/domains/services/Store';

export const NS = 'store';

export type State = StoreFetchResult;

const defaultState: State = {
  id: '',
  name: '',
};

export interface StoreModel {
  namespace: string;
  state: State;
  effects: {
    fetch: Effect;
  };
  reducers: {
    reset: Reducer<State>;
    fetchSucceeded: Reducer<State>;
  };
}

const StoreModel: StoreModel = {
  namespace: NS,

  state: defaultState,

  effects: {
    *fetch({ payload }, { call, put }) {
      const store = yield call(fetchStore, payload);
      if (store) {
        yield put({
          type: 'fetchSucceeded',
          payload: store,
        });
      }
    },
  },

  reducers: {
    reset() {
      return defaultState;
    },
    fetchSucceeded(state, action) {
      return {
        ...state,
        ...action.payload,
      } as State;
    },
  },
};

export default StoreModel;
