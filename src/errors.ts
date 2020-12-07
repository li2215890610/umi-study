import { message } from 'antd';

export enum ErrorType {
  BUSINESS,
  HTTP,
}

export class HttpError extends Error {
  readonly statusCode: number;
  readonly type: ErrorType;
  constructor({
    message,
    statusCode,
  }: {
    message: string;
    statusCode: number;
  }) {
    super(message);
    this.statusCode = statusCode;
    this.type = ErrorType.HTTP;
  }
}

export class DvaEffectError extends Error {
  preventDefault() {
    this.preventDefault && this.preventDefault();
  } // dva 特有方法，用于禁用 effect 中的异常在 catch 后 继续 reject
}

export class BusinessError extends DvaEffectError {
  readonly code: number;
  readonly type: ErrorType;
  readonly req: any;
  constructor({
    message,
    code,
    req,
  }: {
    message: string;
    code: number;
    req?: any;
  }) {
    super(message);
    this.code = code;
    this.type = ErrorType.BUSINESS;
    this.req = req;
  }
}

/**
 * http status < 200 或 status >= 300 的请求处理
 */
export function handleHttpError(
  context: any,
  dispatch: Function,
  err: HttpError,
) {
  const errInfo = {
    type: 'HttpError',
    message: err.message,
    stack: err.stack,
    statusCode: err.statusCode,
    actionType: context.effectArgs[0].type,
    actionPayload: context.effectArgs[0].payload,
  };
  debugger;
  if (errInfo.statusCode === 401) {
    //401 为token过期需要重新去请求
    // dispatch({
    //   type: 'authorization/expired',
    // });
  } else {
    // 在将错误展示给用户时，屏蔽技术性描述，统称为“系统错误”或“网络错误”
    let showMessage = '';
    switch (errInfo.statusCode) {
      case -1:
        showMessage = '网络异常，请检查网络后重试';
        break;
      default:
        showMessage = '系统繁忙，请稍后重试';
        break;
    }
    message.error(`${showMessage}[${errInfo.statusCode}]`);
  }
}

/**
 * 业务错误处理
 */
export function handleBusinessError(
  context: any,
  dispatch: Function,
  err: BusinessError,
) {
  const errInfo = {
    type: 'BusinessError',
    message: err.message,
    stack: err.stack,
    code: err.code,
    actionType: context.effectArgs[0].type,
    actionPayload: context.effectArgs[0].payload,
  };
  if (errInfo.message === '登录失效' || err.code === 1004) {
    // 登陆失效重新登陆
    // dispatch({
    //   type: 'authorization/expired',
    // });
  } else {
    debugger;
    const showMessage = `${errInfo.message}[${errInfo.code}]`;
    message.error(showMessage);
  }
}

/**
 * dva effect 中发生的错误处理（除 Business Error）
 */
export function handleDvaEffectError(
  context: any,
  dispatch: Function,
  err: Error,
) {
  const errInfo = {
    type: 'DvaEffectError',
    message: err.message,
    stack: err.stack,
    actionType: context.effectArgs[0].type,
    actionPayload: context.effectArgs[0].payload,
  };
  debugger;
  const showMessage = `未知错误${errInfo.message}`;
  message.error(showMessage);
}
