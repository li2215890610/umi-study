// import {resolve} from 'path'
import pageRoutes from "./router.config";

import theme from "./theme";

const path = require('path')


const plugins = [
  ['umi-plugin-react', { // ref: https://umijs.org/plugin/umi-plugin-react.html
    antd: true,
    dva: true, //https://umijs.org/zh/plugin/umi-plugin-react.html#dva
    title: {
      //https://umijs.org/zh/plugin/umi-plugin-react.html#title
      defaultTitle: "lkl_japan_b_pc",
      separator: ' / '
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
      // default: 'en-US', // 默认语言 zh-CN
      antd: true,
      // baseNavigator: true, //为true时，用navigator.language的值作为默认语言
    },

    dynamicImport: { // 开启按需加载路由 https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport
      webpackChunkName: true, // 开启按需加载
      loadingComponent: './components/PageLoading/index', // 切换路由loading
    },
    // dynamicImport:  false, // 关闭按需加载


    chunks: ['vendors', 'umi',], //https://umijs.org/zh/plugin/umi-plugin-react.html#chunks
    // 'ant-design',
  }],
]

export default {
  //https://umijs.org/zh/plugin/umi-plugin-react.html#chunks
  //参考 https://github.com/umijs/umi/issues/2063

  // test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,

  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 1,
          automaticNameDelimiter: '.',
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true // 如果该chunk包含的modules都已经另一个被分割的chunk中存在，那么直接引用已存在的chunk，不会再重新产生一个
            },
            // antd: {
            //   name: 'chunk-antd', // cnpm 包 单独将 antd 拆包
            //   priority: 20,
            //   test: /[\\/]node_modules[\\/](_antd@3.20.1@antd|_@ant-design_colors@3.1.0@@ant-design|_@ant-design_create-react-context@0.2.4@@ant-design|_@ant-design_icons-react@2.0.1@@ant-design|_@ant-design_icons@2.1.1@@ant-design)[\\/]/
            // },

            antd: {
              name: 'chunk-antd', // npm 单独将 antd 拆包
              priority: 20,
              test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/
            },

            // chunkReact:{
            //   name: 'chunk-react', // 单独将 react 拆包
            //   priority: 15,
            //   test: /[\\/]node_modules[\\/](react|react-dom|react-router-breadcrumbs-hoc|react-sortable-hoc)[\\/]/
            // },
            // reactMoment:{
            //   name: 'public-moment', // 单独将 @ant-design 拆包
            //   priority: 15,
            //   test: /[\\/]node_modules[\\/](react-router-breadcrumbs-hoc|react-sortable-hoc)[\\/]/
            // },
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,//
              chunks: 'initial'
            },
            common: { // 这个不是默认的，我自己加的
              filename: '[name].js',
              name: 'public-common',
              chunks: 'initial', // chunks 为 initial 时有效。在 umi 中该项默认值是 [name].async.js，webpack 默认值是 [name].js。
              minChunks: 1,
              minSize: 30000,
              enforce: true, // 不管 maxInitialRequest maxAsyncRequests maxSize minSize 怎么样都会生成这个 chunk
            },
            styles: {
              name: 'public-styles',
              test: /\.css$/,
              chunks: 'all',
              minSize: 20000,
              enforce: true,
              priority: 30
            },
          },
        },
      }
    });
  },

  hash: true, //https://umijs.org/zh/config/#hash

  // singular:true, //https://umijs.org/zh/config/#singular

  plugins: plugins,//

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

  // exportStatic: true, //https://umijs.org/zh/config/#exportstatic

  alias: { //https://webpack.js.org/configuration/resolve/#resolvealias
    '@services': path.resolve(__dirname, '..', "src/services"),
    '@utils': path.resolve(__dirname, '..', "src/utils"),
    '@components': path.resolve(__dirname, '..', "src/components"),
    '@styles': path.resolve(__dirname, '..', "src/styles"),
  },

  targets: { //https://umijs.org/zh/config/#targets
    ie: 11,
  },
}
