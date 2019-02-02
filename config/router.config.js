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
        title:'Home',    
      },
      { 
        path: '/home/user', 
        component: './Users/Users' ,
        title:'Users',    
      },
      { 
        path: '/home/demo', 
        component: './demo/demo',
        title:'demo',    
      },
      { 
        path: '/home/index', 
        component: './Index/Index',
        title:'Index',    
      },
      {
        path:"/home/ui",
        component:'./Ui/Ui',
        routes:[
          {
            path:'/home/ui/button',
            component:'./Ui/Button/Button'
          },
          {
            path:'/home/ui/modal',
            component:'./Ui/Modal/Modal'
          },
          {
            path:'/home/ui/loading',
            component:'./Ui/Loading/Loading'
          },
          {
            path:'/home/ui/notification',
            component:'./Ui/Notification/Notification'
          },
          {
            path:'/home/ui/message',
            component:'./Ui/Message/Message'
          },
          {
            path:'/home/ui/tab',
            component:'./Ui/tab/tab'
          },
        ]
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
