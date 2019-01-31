/**
 * 
 * 
 * component =====> 配置页面一切以src开始
 */

export default [
  // app
  {
    path: '/',
    component: '../layouts/index', //配置页面
    Routes: ['src/routes/RootRoute'], // Routes  嵌套路由
  },
  // {
  //   path:"/home",
  //   component:"./home",
  // },
  {
    path:"/users",
    title: 'users',
    component:"./users/users", 
  },
  {
    path:"/login",
    component:"./Login/Login",
  },
  {
    path:"/index",
    component:"./index",
  },
  {
    component: './404/404',
  },
];
