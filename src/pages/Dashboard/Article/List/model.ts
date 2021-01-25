import { Effect, ImmerReducer } from 'umi';
import { removeNS } from '@/utils/action';
import { RootState } from '@/models/RootState';
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
  page: number;
  pageSzie: number;
  totalPage: number;
  statusFilter: Service.ArticleStatusFilter;
  keyword: '' | string;
}

export interface ArticleModelState {
  namespace: string;
  state: State;
  effects: {
    [Action.ActionTypes.Fetch]: Effect;
    [Action.ActionTypes.Delete]: Effect;
    [Action.ActionTypes.BatchUpDownShelfArticle]: Effect;
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
    *[Action.ActionTypes.Fetch]({ payload }, { call, put }) {
      const response = yield call(Service.fetchArticle, payload);
      yield put(
        removeNS(Action.fetchSucceeded({ ...payload, ...response }), NS),
      );
    },
    *[Action.ActionTypes.Delete]({ payload }, { call, put, select }) {
      yield call(Service.deleteArticle, payload);
      const state: RootState['article'] = (yield select()).article;
      console.log(state, '1___11');

      // const state: RootState = yield select();
      // const listState = state[NS];

      yield put(
        removeNS(
          Action.fetch({
            pageNum: 1,
            pageSize: 5,
            statusFilter: state.statusFilter,
          }),
          NS,
        ),
      );
    },
    *[Action.ActionTypes.BatchUpDownShelfArticle](
      { payload },
      { call, put, select },
    ) {
      yield call(Service.batchUpDownShelfArticle, payload);
      const state: RootState['article'] = (yield select())[NS];
      console.log(state, '1___11');

      yield put(
        removeNS(
          Action.fetch({
            pageNum: 1,
            pageSize: 5,
            statusFilter: state.statusFilter,
          }),
          NS,
        ),
      );
    },
  },
  reducers: {
    [Action.ActionTypes.FetchSucceeded]: (_, { payload }) => {
      console.log(payload, '____payload_____');

      return {
        page: payload.page,
        list: payload.list,
        pageSize: payload.pageSize,
        totalPage: payload.totalPage,
        statusFilter: payload.statusFilter,
      };
    },
  },
};

export default Article;
