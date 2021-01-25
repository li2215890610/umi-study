import { requestHttp, Req } from '@/utils/request';
import { Category } from '../entities/Category';

/**
 * 增加分类列表
 */
export type CategoryListCreateParams = {
  name: Category['name'];
};
export type CategoryListCreateResult = void;
export async function createCategoryList(params: CategoryListCreateParams) {
  type ReqData = {
    name: string;
  };

  type ResDataInner = void;

  const reqTransfer = (params: CategoryListCreateParams): Req<ReqData> => {
    return {
      method: 'POST',
      url: '@categoryApi/create',
      auth: true,
      data: {
        name: params.name,
      },
    };
  };

  const resTransfer = (
    params: CategoryListCreateParams,
    res: ResDataInner | void,
  ): CategoryListCreateResult | void => {};

  return requestHttp<ReqData, ResDataInner>(reqTransfer(params)).then(res =>
    resTransfer(params, res),
  );
}

/**
 * 获取 文章分类信息
 */
export type CategoryListFetchParams = void;
export type CategoryListFetchResult = Category[];
export async function fetchCategory(params: CategoryListFetchParams) {
  type ReqData = {};

  type ResDataInner = {
    id: string;
    name: string;
  }[];

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'GET',
      url: '@categoryApi/category',
    };
  };

  const resTransfer = (res: ResDataInner): CategoryListFetchResult | null => {
    return res;
  };

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(res =>
    resTransfer(res),
  );
}

export type CategoryListUpdateParams = {
  id: Category['id'];
  name: Category['name'];
}[];
export type CategoryListUpdateResult = void;
export async function updateCategoryList(params: CategoryListUpdateParams) {
  type ReqData = {
    category: Array<{
      name: string;
      id?: string;
    }>;
  };

  type ResDataInner = void;

  const reqTransfer = (params: CategoryListUpdateParams): Req<ReqData> => {
    return {
      method: 'POST',
      url: '@scApi/store',
      auth: true,
      data: {
        category: params,
      },
    };
  };

  const resTransfer = (
    params: CategoryListUpdateParams,
    res: ResDataInner | void,
  ): CategoryListUpdateResult | void => {};

  return requestHttp<ReqData, ResDataInner>(reqTransfer(params)).then(res =>
    resTransfer(params, res),
  );
}
