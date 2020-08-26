export default [
  {
    path: '/',
    component: '@/layouts/provider',
    routes: [
      {
        path: '/',
        exact: true,
        component: '@/pages/index',
      },
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
        ],
      },
      {
        path: '/login',
        component: '@/pages/Login',
      },
      {
        component: '@/pages/404',
      },
    ],
  },
];
