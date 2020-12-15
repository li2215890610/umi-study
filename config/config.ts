import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  styles: ['#root{min-height: 100vh;display: flex;}'],
  //title 应该和国际化配合使用
  title: 'umi@3', //https://umijs.org/zh-CN/config#title
  locale: {
    //https://umijs.org/zh-CN/plugins/plugin-locale
    default: 'zh-CN', //https://umijs.org/zh-CN/plugins/plugin-locale#default
    antd: true, //https://umijs.org/zh-CN/plugins/plugin-locale#antd
    title: true, //https://umijs.org/zh-CN/plugins/plugin-locale#title
    baseNavigator: false, //https://umijs.org/zh-CN/plugins/plugin-locale#basenavigator
    // useLocalStorage: true,
    baseSeparator: '-', //https://umijs.org/zh-CN/plugins/plugin-locale#baseseparator
  },
  proxy: {
    '/businessAssistantApi': {
      target: 'http://127.0.0.1:10086/mock/businessAssistantApi/',
      changeOrigin: true,
      pathRewrite: { '^/businessAssistantApi': '' },
    },
    '/userApi': {
      target: 'http://127.0.0.1:10086/mock/userApi/',
      changeOrigin: true,
      pathRewrite: { '^/userApi': '' },
    },
  },
  hash: true, //https://umijs.org/zh-CN/config#hash
  // dva:{//https://umijs.org/zh-CN/plugins/plugin-dva
  //   immer: true
  // },
  //https://umijs.org/zh-CN/config#dynamicimport
  dynamicImport: {
    loading: '@/components/DynamicLoading/index',
  },
  targets: {
    ie: 9,
  },
  define: {
    PROXY_ENV: process.env.PROXY_ENV,
  },
  routes: routes,
  ignoreMomentLocale: true, // https://umijs.org/zh-CN/config#ignoremomentlocale
});
