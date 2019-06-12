import pageRoutes from "./router.config";

import theme from "./theme";

const path = require('path')

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    
    dva: true, //https://umijs.org/zh/plugin/umi-plugin-react.html#dva
    
    title: {
      defaultTitle: "umi后台管理系统"
    },
    
    routes: { //https://umijs.org/zh/plugin/umi-plugin-react.html#routes
      // exclude:[
      //   /Models\//,
      //   /models\//,
      //   /Services\//,
      //   /model\.(t|j)sx?$/,
      //   /Service\.(t|j)sx?$/,
      //   /Components\//,
      // ]
    },

    // dll: {
    //   include: ["dva", "dva/router", "dva/saga", "axios", "umi/router",'antd/es'],
    // }, //https://umijs.org/zh/plugin/umi-plugin-react.html#dll  &&  https://blog.csdn.net/weixin_33768153/article/details/83148661
    dll: true,

    hardSource: false, //https://umijs.org/zh/plugin/umi-plugin-react.html#hardsource

    //国际化
    locale: { //https://umijs.org/zh/plugin/umi-plugin-react.html#locale
      enable: true, // default false
      default: 'zh-CN', // 默认语言 zh-CN
      antd: true ,
      baseNavigator: true, //为true时，用navigator.language的值作为默认语言
    },

    dynamicImport: { // 开启按需加载路由 https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport
      webpackChunkName: true, // 开启按需加载
      loadingComponent: './components/PageLoading/index', // 切换路由loading
    },

    // dynamicImport:  false, // 关闭按需加载

    // chunks: ['vendors', 'umi'], //https://umijs.org/zh/plugin/umi-plugin-react.html#chunks
  }],
]

export default {

    //https://umijs.org/zh/plugin/umi-plugin-react.html#chunks

  // test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,

  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     }
  //   });
  // },

  // singular:true, //https://umijs.org/zh/config/#singular

  plugins: plugins,

  treeShaking: true, //https://umijs.org/zh/config/#treeshaking
  
  disableRedirectHoist: true, //详细见 https://umijs.org/zh/config/#disableredirecthoist
  
  routes: pageRoutes, // https://umijs.org/zh/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1
  
  // history: 'hash', // 配置hash路由 https://umijs.org/zh/config/#history
  
  // base:"", //https://umijs.org/zh/config/#base


  // theme: { // 定制UI // https://ant.design/docs/react/customize-theme-cn
  //   'primary-color': "#202020",
  // },
  theme: theme, //外部引入


  externals: { // 配置不打包进入dist的npm  https://umijs.org/zh/config/#externals
    // '@antv/data-set': 'DataSet',
  },

  ignoreMomentLocale: true, //忽略 moment 的 locale 文件，用于减少尺寸。 https://umijs.org/zh/config/#ignoremomentlocale
  
  disableRedirectHoist: true, //https://umijs.org/zh/config/#disableredirecthoist
  
  // exportStatic: true, //https://umijs.org/zh/config/#exportstatic

  alias: { //https://webpack.js.org/configuration/resolve/#resolvealias
    '@services': path.resolve(__dirname,'..', "src/services"),
    '@utils': path.resolve(__dirname,'..', "src/utils"),
    '@components': path.resolve(__dirname,'..', "src/components"),
  },
  
  targets: { //https://umijs.org/zh/config/#targets
    ie: 11,
  },
}
