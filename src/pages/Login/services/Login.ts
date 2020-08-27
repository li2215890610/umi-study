import { Login } from '../domains/Login';

export type fetchLoginParams = Login;
export type fetchLoginResult = void;
export async function fetchLogin(params: fetchLoginParams) {
  type ReqData = {};

  type ResDataInner = {};

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'GET',
      url: `@scApi/store/getWxPayChannel`,
      params: {},
    };
  };

  const resTransfer = (res: ResDataInner): fetchLoginResult => {};
  // const resTransfer = (res: ResDataInner): fetchLoginResult | void => {
  //   if (res) {
  //     return {
  //       name:""
  //     };
  //   }
  // };

  return f0Agent<ReqData, ResDataInner>(reqTransfer()).then(res =>
    resTransfer(res),
  );
}
