import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'umi@3.0', //
  proxy: {
    '/businessAssistantApi': {
      target: 'http://localhost:10086/mock/businessAssistantApi/',
      changeOrigin: true,
      pathRewrite: { '^/businessAssistantApi': '' },
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
  routes: routes,
});
