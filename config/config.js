import pageRoutes from "./router.config";


export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'FCT后台管理系统',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
      locale: {
        enable: true, // default false
        default: 'zh-CN', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
    }],
  ],
  disableRedirectHoist: true,
  routes: pageRoutes,
  history: 'hash',
  base:""
}
