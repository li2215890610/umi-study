import { Effect, ImmerReducer, history } from 'umi';
import { fetchLogin } from './services/Login';
import * as Action from './action';

export const NS = 'login';

export interface State {}

export interface LoginModelState {
  namespace: string;
  state: State;
  effects: {
    [Action.ActionTypes.Login]: Effect;
  };
  reducers: {
    [Action.ActionTypes.Reset]: ImmerReducer<
      State,
      ReturnType<typeof Action.reset>
    >;
  };
}

const defaultState: State = {};
const Login: LoginModelState = {
  namespace: NS,
  state: defaultState,
  effects: {
    *[Action.ActionTypes.Login]({ payload }, { call }) {
      const response = yield call(fetchLogin, payload);
      history.push('/dashboard');
    },
  },
  reducers: {
    [Action.ActionTypes.Reset]: () => {
      return defaultState;
    },
  },
};

export default Login;
