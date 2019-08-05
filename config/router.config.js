export default [
  {
    path: '/login',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/login', redirect: '/login/login' },
      { path: '/login/login', name: 'login', component: './Login/Login' },
      { path: '/login/register', name: 'register', component: './Login/Register' },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/notes/list' },
      {
        path: '/notes',
        icon: 'book',
        name: 'notes',
        routes: [
          { path: '/notes', redirect: '/notes/list' },
          {
            path: '/notes/list',
            icon: 'profile',
            name: 'list',
            component: './Notes/List',
          },
          {
            path: '/notes/edit',
            icon: 'highlight',
            name: 'edit',
            component: './Notes/Edit',
          },
        ]
      },
      {
        path: '/profile',
        icon: 'bank',
        name: 'profile',
        component: './Profile',
      },
      {
        path: '/password',
        icon: 'eye-invisible',
        name: 'password',
        component: './Password',
      },
      {
        path: '/spider',
        icon: 'bug',
        name: 'spider',
        component: './Spider',
      },
      {
        path: '/user',
        icon: 'user',
        name: 'user',
        component: './User',
      },
      {
        path: '/system',
        icon: 'robot',
        name: 'system',
        routes: [
          { path: '/system', redirect: '/system/config' },
          {
            path: '/system/config',
            icon: 'setting',
            name: 'config',
            component: './System/Config',
          },
          {
            path: '/system/info',
            icon: 'hdd',
            name: 'info',
            component: './System/Info',
          },
        ]
      },
      {
        path: 'https://blog.liushuaiqi.top',
        icon: 'read',
        name: 'blog',
      },
      {
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            component: './Exception/500',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
  {
    component: '404',
  },
];
