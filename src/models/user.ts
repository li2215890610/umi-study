import { Effect, Reducer } from 'umi';
import { fetchUser, UserFetchResult, logout } from '@/domains/services/User';
// import Cookies from 'js-cookie';
import { message } from 'antd';

export type State = UserFetchResult & {
  done: boolean;
};

const defaultState: State = {
  jinjuId: '',
  mobile: '',
  nickname: '',
  email: '',
  introduction: '',
  avatar: '',
  done: false,
};

export interface UserModel {
  namespace: 'user';
  state: State;
  effects: {
    fetch: Effect;
    logout: Effect;
  };
  reducers: {
    reset: Reducer<State>;
    fetchSucceeded: Reducer<State>;
  };
}

const UserModel: UserModel = {
  namespace: 'user',
  state: defaultState,
  effects: {
    *fetch({ payload }, { call, put }) {
      const user = yield call(fetchUser, payload);
      if (user) {
        yield put({
          type: 'fetchSucceeded',
          payload: user,
        });
      }
    },
    *logout(_, { call, put }) {
      message.loading('正在退出');
      yield call(logout);
      // Cookies.remove('JJ_SESSION');
      // Cookies.remove('token');
      // window.location.href = ''
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
        done: true,
      } as State;
    },
  },
};

export default UserModel;
