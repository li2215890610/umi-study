import pageRoutes from "./router.config";


const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: true, //https://umijs.org/zh/plugin/umi-plugin-react.html#dva
    title: 'FCT后台管理系统',
    dll: true, //https://umijs.org/zh/plugin/umi-plugin-react.html#dll
    routes: {
      exclude: [],
    }, 
    hardSource: false, //https://umijs.org/zh/plugin/umi-plugin-react.html#hardsource
    locale: { //https://umijs.org/zh/plugin/umi-plugin-react.html#locale
      enable: true, // default false
      default: 'zh-CN', // default zh-CN
      baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
    },
    dynamicImport: { // 开启按需加载路由 https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport
      webpackChunkName: true, // 开启按需加载
    },
    // dynamicImport:  false, // 关闭按需加载

  }],
]

export default {
  plugins: plugins,
  disableRedirectHoist: true, //详细见 https://umijs.org/zh/config/#disableredirecthoist
  routes: pageRoutes,
  // history: 'hash', // 配置hash路由 https://umijs.org/zh/config/#history
  // base:"", //https://umijs.org/zh/config/#base
}
