import { Effect, ImmerReducer } from 'umi';

export interface State {
  // status?: 'ok' | 'error';
  // type?: string;
  // currentAuthority?: 'user' | 'guest' | 'admin';
  name: string;
}

export interface LoginModelState {
  namespace: string;
  state: State;
  effects: {
    login: Effect;
  };
  reducers: {
    changeLoginStatus: ImmerReducer<State>;
  };
}

const Login: LoginModelState = {
  namespace: 'login',
  state: {
    // status: undefined,
    name: 'sss',
  },
  effects: {
    *login({ payload }, { call, put }) {
      // const response = yield call(fakeAccountLogin, payload);
      // yield put({
      //   type: 'changeLoginStatus',
      //   payload: response,
      // });
    },

    // logout() {
    //   const { redirect } = getPageQuery();
    //   // Note: There may be security issues, please note
    //   if (window.location.pathname !== '/user/login' && !redirect) {
    //     history.replace({
    //       pathname: '/user/login',
    //       search: stringify({
    //         redirect: window.location.href,
    //       }),
    //     });
    //   }
    // },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        // status: payload.status,
        // type: payload.type,
      };
    },
  },
};

export default Login;
