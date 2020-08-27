// import { State as UserState } from '@/models/user';
import { State as StoreState } from '@/models/store';
import { State as LoginState } from '@/pages/Login/model';

export type RootState = {
  // user: UserState;
  store: StoreState;
  loading: any;
  login: LoginState;
};
