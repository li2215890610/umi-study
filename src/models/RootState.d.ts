import { State as UserState } from '@/models/user';
import { State as LoginState } from '@/pages/Login/model';
import { State as LocalesState } from '@/pages/Dashboard/Locales/model';
import { State as CategoryState } from '@/pages/Dashboard/Category/model';
import { State as ArticleState } from '@/pages/Dashboard/Article/List/model';
import { State as ArticleDetailState } from '@/pages/Dashboard/Article/Detail/model';

export type RootState = {
  user: UserState;
  loading: any;
  login: LoginState;
  locales: LocalesState;
  category: CategoryState;

  article: ArticleState;
  'article/detail': ArticleDetailState;
};
