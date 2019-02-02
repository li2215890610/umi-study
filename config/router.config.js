/**
 * 
 * 
 * component =====> 配置页面一切以 src 目录开始
 */

export default [
  {
    path:"/login",
    component:"./Login/Login",
  },
  {
    path: '/',
    Routes: [  // Routes   https://reacttraining.com/react-router/web/guides/static-routes 匹配路由挂在前
      'src/routes/RootRoute'
    ],
  },
  {
    path: '/home',
    component: '../layouts/index', //配置页面
    routes: [  // routes  嵌套路由子路由
      { 
        path: '/home', 
        component: './Home/Home',    
        title:'9999',    
      },
      { 
        path: '/home/user', 
        component: './Users/Users' ,
        title:'9999',    
      },
      { 
        path: '/home/demo', 
        component: './demo/demo' 
      },
      { 
        path: '/home/index', 
        component: './Index/Index' 
      },
      {
        component: './404/404',
      },
    ],
  },
  // {
  //   path:"/index",
  //   component:"./Index/Index",
  // },
  {
    component: './404/404',
  },
];
