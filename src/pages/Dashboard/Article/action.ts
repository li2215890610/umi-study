import { NS } from './model';
import { TNAME } from '@/utils/action';
import * as Service from './services/Article';

export enum ActionTypes {
  Fetch = 'fetch',
  FetchSucceeded = 'fetchSucceeded',
}

export const fetch = () => ({
  type: TNAME(ActionTypes.Fetch, NS),
});

export const fetchSucceeded = (params: Service.ArticleFetchResult) => ({
  type: TNAME(ActionTypes.FetchSucceeded, NS),
  payload: params,
});
