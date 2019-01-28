import pageRoutes from "./router.config";


export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // dynamicImport:  false, // 关闭按需加载
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
      dynamicImport: {
        webpackChunkName: true, // 开启按需加载
      },
    }],
  ],
  disableRedirectHoist: true, //详细见 https://umijs.org/zh/config/#disableredirecthoist
  routes: pageRoutes,
  // history: 'hash', // 配置hash路由
  base:""
}
