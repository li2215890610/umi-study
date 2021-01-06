import { NS } from './model';
import { TNAME } from '@/utils/action';
import * as Service from './services/Article';

export enum ActionTypes {
  Fetch = 'fetch',
  FetchSucceeded = 'fetchSucceeded',
}

export const fetch = (params: Service.ArticleFetchParams) => ({
  type: TNAME(ActionTypes.Fetch, NS),
  payload: params,
});

export const fetchSucceeded = (params: Service.ArticleFetchResult) => ({
  type: TNAME(ActionTypes.FetchSucceeded, NS),
  payload: params,
});
