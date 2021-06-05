import { requestHttp, Req } from '@/utils/request';
import { Category } from '../entities/Category';

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
