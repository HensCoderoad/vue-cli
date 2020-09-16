export default [
  {
    path: '/query',
    name: 'query',
    component: () => import('../views/query/index.vue'),
  },
  {
    path: '/',
    name: 'subcribe',
    component: () => import('../views/subcribe/index.vue'),
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/input/index.vue'),
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('../views/result/index.vue'),
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/history/index.vue'),
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/report/index.vue'),
  },
  {
    path: '/tips',
    name: 'tips',
    component: () => import('../views/tips/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];
