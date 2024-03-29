// export default [
//   {
//     path: '/',
//     component: '@/layouts/provider',
//     routes: [
//       {
//         path: '/',
//         exact: true,
//         component: '@/pages/index',
//       },
//       {
//         path: '/dashboard',
//         component: '@/pages/Dashboard',
//         routes: [
//           {
//             path: '/dashboard',
//             redirect: '/dashboard/main',
//           },
//           {
//             path: '/dashboard/main',
//             exact: true,
//             component: '@/pages/Dashboard/Main',
//           },
//         ],
//       },
//       {
//         path: '/login',
//         component: '@/pages/Login',
//       },
//       {
//         component: '@/pages/404',
//       },
//     ],
//   },
// ];

export default [
  {
    path: '/login',
    component: '@/pages/Login',
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      //重定向 login页面
      {
        path: '/',
        redirect: '/login',
      },
      {
        path: '/dashboard',
        component: '@/pages/Dashboard/layout',
        routes: [
          {
            path: '/dashboard',
            redirect: '/dashboard/main',
          },
          {
            path: '/dashboard/main',
            exact: true,
            component: '@/pages/Dashboard/Main',
          },
          {
            path: '/dashboard/category',
            exact: true,
            component: '@/pages/Dashboard/Category',
          },

          {
            path: '/dashboard/article/detail/:id?',
            exact: true,
            component: '@/pages/Dashboard/Article/Detail',
          },
          {
            path: '/dashboard/article',
            exact: true,
            component: '@/pages/Dashboard/Article/List',
          },

          {
            path: '/dashboard/locales',
            exact: true,
            component: '@/pages/Dashboard/Locales',
          },
          {
            path: '/dashboard/hooks',
            exact: true,
            component: '@/pages/Dashboard/Hooks',
          },
        ],
      },
      {
        path: '/setting/user',
        component: '@/pages/Setting',
        exact: true,
      },
      {
        component: '@/pages/404',
      },
    ],
  },
];
