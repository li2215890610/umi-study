import { Effect, ImmerReducer } from 'umi';
import { removeNS } from '@/utils/action';
import * as Service from './services/Article';
import * as Entity from './entities/Article';
import * as Action from './action';

export const NS = 'article';

export const articleStatus = new Map([
  [Service.ArticleStatusFilter.ALL, '全部'],
  [Service.ArticleStatusFilter.SUCCESS, '成功'],
  [Service.ArticleStatusFilter.PENDING, '进行中'],
  [Service.ArticleStatusFilter.REJECT, '失败'],
]);

export interface State {
  list: Entity.Article[];
  page: 1;
  pageSzie: 5;
  totalPage: 0;
  statusFilter: Service.ArticleStatusFilter.ALL;
  keyword: '';
}

export interface ArticleModelState {
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
  page: 1,
  pageSzie: 5,
  totalPage: 0,
  statusFilter: 0,
  keyword: '',
};

const Article: ArticleModelState = {
  namespace: NS,
  state: defaultState,
  effects: {
    *[Action.ActionTypes.Fetch](action, { call, put }) {
      const response = yield call(Service.fetchArticle, action.payload);
      yield put(removeNS(Action.fetchSucceeded(response), NS));
    },
  },
  reducers: {
    [Action.ActionTypes.FetchSucceeded]: (_, { payload }) => {
      return {
        page: payload.page,
        list: payload.list,
        pageSize: payload.pageSize,
        totalPage: payload.totalPage,
      };
    },
  },
};

export default Article;
