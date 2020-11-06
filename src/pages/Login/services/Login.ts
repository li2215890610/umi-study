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
      method: 'GET',
      url: `http://127.0.0.1:10086/businessAssistantApi/task`,
      params: params,
      // formData: true
    };
  };

  // const resTransfer = (res: ResDataInner): fetchLoginResult => res;

  const resTransfer = (res: ResDataInner): fetchLoginResult | void => {
    return res;
    if (res.length) {
      return res;
    }
  };

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(res =>
    resTransfer(res),
  );
}
