export enum ProxyEnv {
  development = 'development',
  test = 'test',
  production = 'production',
}

export type BaseUrlMap = {
  userApi: string;
};

// https://passport.jinjuxiaodian.com/api/sso/async_login

export const baseUrlMap: BaseUrlMap = {
  [ProxyEnv.development]: {
    userApi: '/userApi',
  },
  [ProxyEnv.test]: {
    userApi:
      'https://www.easy-mock.com/mock/5fcd93584ae32e320c62ccd3/UmiV3/user',
  },
  [ProxyEnv.production]: {
    userApi:
      'https://www.easy-mock.com/mock/5fcd93584ae32e320c62ccd3/UmiV3/user',
  },
}[(PROXY_ENV as ProxyEnv) || ProxyEnv.production];
