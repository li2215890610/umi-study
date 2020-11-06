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
    introduction: string;
    avatar: string;
    mobile: string;
  };

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'GET',
      url: '@mpApi/user',
    };
  };

  const resTransfer = (res: ResDataInner): UserFetchResult | null => {
    if (!res) {
      return null;
    }
    return {
      // jinjuId: res.jinjuId,
      // mobile: res.mobile,
      // nickname: res.nickname,
      // email: res.email,
      // introduction: res.introduction,
      // avatar: http2https(res.avatar),
      // type: {
      //   0: UserType.PRIMARY,
      //   1: UserType.SUB,
      // }[res.type],
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
