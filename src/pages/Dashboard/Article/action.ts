import { NS } from './model';
import { TNAME } from '@/utils/action';
import * as Service from './services/Article';

export enum ActionTypes {
  Fetch = 'fetch',
  FetchSucceeded = 'fetchSucceeded',
  UpdateSucceeded = 'updateSucceeded',
  Reset = 'reset',
  Delete = 'delete',
}

export const fetch = (params: Service.ArticleFetchParams) => ({
  type: TNAME(ActionTypes.Fetch, NS),
  payload: params,
});

export const fetchSucceeded = (
  params: Service.ArticleFetchResult & {
    statusFilter: Service.ArticleFetchParams['statusFilter'];
  },
) => ({
  type: TNAME(ActionTypes.FetchSucceeded, NS),
  payload: params,
});

export const deleteArticle = (params: Service.ArticleDeleteParams) => ({
  type: TNAME(ActionTypes.Delete, NS),
  payload: params,
});
