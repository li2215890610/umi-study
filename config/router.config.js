export default [
  // app
  {
    path: '/',
    component: '../layouts/index',
    Routes: ['src/routes/RootRoute'],
  },
  {
    path:"/login",
    component:"./login/login",
  },
  {
    component: '404',
  },
];
