import { requestHttp, Req } from '@/utils/request';
import { Category } from '../entities/Category';

/**
 * 获取 文章分类信息
 */
export type CategoryFetchParams = void;
export type CategoryFetchResult = Category[];
export async function fetchCategory(params: CategoryFetchParams) {
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

  const resTransfer = (res: ResDataInner): CategoryFetchResult | null => {
    return res;
  };

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(res =>
    resTransfer(res),
  );
}
