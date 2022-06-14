import { NS } from './model';
import { TNAME } from '@/utils/action';
import { fetchLoginParams } from './services/Login';

export enum ActionTypes {
  Login = 'login',
  Reset = 'reset',
}

export const login = (params: fetchLoginParams) => ({
  type: TNAME(ActionTypes.Login, NS),
  payload: params,
});

export const reset = () => ({
  type: TNAME(ActionTypes.Reset, NS),
});
