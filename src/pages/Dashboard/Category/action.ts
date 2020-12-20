import { NS } from './model';
import { TNAME } from '@/utils/action';

export enum ActionTypes {
  Fetch = 'fetch',
  FetchSucceeded = 'fetchSucceeded',
}

export const fetch = () => ({
  type: TNAME(ActionTypes.Fetch, NS),
});

export const fetchSucceeded = () => ({
  type: TNAME(ActionTypes.FetchSucceeded, NS),
});
