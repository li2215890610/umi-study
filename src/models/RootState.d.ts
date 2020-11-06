import { State as UserState } from '@/models/user';
import { State as StoreState } from '@/models/store';
import { State as LoginState } from '@/pages/Login/model';
import { State as LocalesState } from '@/pages/Dashboard/Locales/model';

export type RootState = {
  user: UserState;
  // loading: any;
  store: StoreState;
  login: LoginState;
  locales: LocalesState;
};
