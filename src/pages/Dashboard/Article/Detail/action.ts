import { NS } from './model';
import { TNAME } from '@/utils/action';
import * as Service from './services/Category';
import * as Entity from './entities/Category';

export enum ActionTypes {
  Fetch = 'fetch',
  Update = 'update',
  Create = 'create',
  Del = 'del',
  Sort = 'sort',
  FetchSucceeded = 'fetchSucceeded',
}

export const fetch = (params: Service.CategoryListFetchParams) => ({
  type: TNAME(ActionTypes.Fetch, NS),
  payload: params,
});

export const update = (params: Entity.Category) => ({
  type: TNAME(ActionTypes.Update, NS),
  payload: params,
});

export const create = (params: { name: Entity.Category['name'] }) => ({
  type: TNAME(ActionTypes.Create, NS),
  payload: params,
});

export const del = (params: { id: Entity.Category['id'] }) => ({
  type: TNAME(ActionTypes.Del, NS),
  payload: params,
});

export const sort = (params: Service.CategoryListUpdateParams) => ({
  type: TNAME(ActionTypes.Sort, NS),
  payload: params,
});

export const fetchSucceeded = (params: Service.CategoryListFetchResult) => ({
  type: TNAME(ActionTypes.FetchSucceeded, NS),
  payload: params,
});
