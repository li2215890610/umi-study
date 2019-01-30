import pageRoutes from "./router.config";

import theme from "./theme";

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: true, //https://umijs.org/zh/plugin/umi-plugin-react.html#dva
    title: 'FCT后台管理系统',
    dll: true, //https://umijs.org/zh/plugin/umi-plugin-react.html#dll
    routes: { //https://umijs.org/zh/plugin/umi-plugin-react.html#antd
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
  routes: pageRoutes, // https://umijs.org/zh/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1
  // history: 'hash', // 配置hash路由 https://umijs.org/zh/config/#history
  // base:"", //https://umijs.org/zh/config/#base
  // theme: { // 定制UI // https://ant.design/docs/react/customize-theme-cn
  //   'primary-color': "#202020",
  // },
  theme: theme,

  externals: { // 配置不打包进入dist的npm  https://umijs.org/zh/config/#externals
    // '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true, //忽略 moment 的 locale 文件，用于减少尺寸。 https://umijs.org/zh/config/#ignoremomentlocale
  disableRedirectHoist: true, //https://umijs.org/zh/config/#disableredirecthoist

}
