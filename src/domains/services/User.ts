import { requestHttp, Req } from '@/utils/request';
import { User } from '@/domains/entities/user';
import { http2https } from '@/utils/image';

/**
 * 获取用户信息
 */
export type UserFetchParams = void;
export type UserFetchResult = User;
export async function fetchUser(params: UserFetchParams) {
  type ReqData = {};

  type ResDataInner = {
    jinjuId: string;
    nickname: string;
    email: string;
    avatar: string;
    mobile: string;
  };

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'GET',
      url: '@userApi/info',
    };
  };

  const resTransfer = (res: ResDataInner): UserFetchResult | null => {
    return {
      jinjuId: res.jinjuId,
      mobile: res.mobile,
      nickname: res.nickname,
      email: res.email,
      avatar: http2https(res.avatar),
    };
  };

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(res =>
    resTransfer(res),
  );
}

/**
 * 登出
 */
export async function logout() {
  type ReqData = {};
  type ResDataInner = {};
  const reqTransfer = (): Req<ReqData> => {
    return {
      url: '@passportApi/api/sso/async_logout',
      method: 'GET',
      // credentials: 'include',
    };
  };

  const resTransfer = (): void => {};

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(resTransfer);
}
