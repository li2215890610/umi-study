/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend, RequestOptionsInit } from 'umi-request';

const codeMessage: {
  [statusCode: number]: string;
} = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户没有权限',
  403: '用户得到授权，但是访问是被禁止的',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除，且不会再得到的',
  422: '当创建一个对象时，发生一个验证错误',
  500: '服务器发生错误，请检查服务器',
  502: '网络错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网络超时',
};

/**
 * 请求体
 */
export type Req<T> = {
  url: string;
  method: 'GET' | 'POST';
  timeout?: number;
  data?: T;
  params?: T | object;
  header?: {
    [propsName: string]: string;
  };
  requestType?: 'json' | 'form';
  delay?: number; //延迟几秒
  formData?: boolean;
  responseType?: RequestOptionsInit['responseType'];
};

/**
 * 返回体
 */
export type Res<D> = {
  statusCode: number;
  data: D;
};

const request = extend({
  timeout: 6000, //设置超时时间
  errorHandler: function(error) {
    /* 异常处理 */
  },
});

const requestHeaderHandler = (header: any) => {
  let newList: any = {};
  header.map((_: any, i: number) => {
    for (const keys in header[i]) {
      newList[keys] = header[i][keys];
    }
  });

  return newList;
};

export const requestHttp = <ReqData extends object, ResDataInner>(
  req: Req<ReqData>,
): Promise<ResDataInner> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      method: (req.method && req.method.toLocaleLowerCase()) || 'get',
      data: req.data,
      params: req.params,
      requestType: req.requestType,
      responseType: req.responseType || undefined,
      headers: requestHeaderHandler([
        // !req.formData ? {
        //   'Content-Type':
        //     req.requestType === 'form'
        //       ? 'application/x-www-form-urlencoded;charset=utf-8'
        //       : 'application/json;charset=utf-8',
        // } : {},
        req.header ? req.header : {},
      ]),
    };

    request(req.url, requestData)
      .then(res => {
        setTimeout(() => {});
        if (res.status && res.status.code === 0) {
          return req.delay
            ? setTimeout(() => {
                resolve(res.result);
              }, req.delay)
            : resolve(res.result);
        }
      })
      .catch(e => {
        reject(e);
      });
  });
};
