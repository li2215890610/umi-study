import { requestHttp, Req } from '@/utils/request';
import { Store } from '@/domains/entities/Store';

/**
 * 获取店铺信息
 */
export type StoreFetchParams = void;
export type StoreFetchResult = Store;
export async function fetchStore(params: StoreFetchParams) {
  type ReqData = {};

  type ResDataInner = {
    storeId: string;
    name: string;
  };

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'GET',
      url: '@mpApi/store/detail',
      auth: true,
    };
  };

  const resTransfer = (res: ResDataInner): StoreFetchResult | null => {
    if (!res) {
      return null;
    }
    return {
      id: res.storeId,
      name: res.name,
    };
  };

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(resTransfer);
}
