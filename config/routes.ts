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
      {
        path: '/dashboard',
        component: '@/pages/Dashboard',
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
        component: '@/pages/404',
      },
    ],
  },
];
