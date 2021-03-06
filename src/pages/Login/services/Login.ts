import { Login } from '../domains/Login';
import { requestHttp, Req } from '@/utils/request';

export type fetchLoginParams = Login;
export type fetchLoginResult = {
  id: number;
  status: boolean;
  title: string;
}[];
export async function fetchLogin(params: fetchLoginParams) {
  type ReqData = {
    password: string;
    username: string;
  };

  type ResDataInner = {
    id: number;
    status: boolean;
    title: string;
  }[];

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'POST',
      url: `@userApi/login`,
      data: {
        password: params.password,
        username: params.username,
      },
    };
  };

  const resTransfer = (res: ResDataInner): fetchLoginResult | void => {};

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(res =>
    resTransfer(res),
  );
}
