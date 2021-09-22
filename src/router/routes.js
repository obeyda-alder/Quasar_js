const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: "Home" },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('pages/Home.vue')
      },
      // {
      //   path: '/about-us',
      //   name: 'AboutUs',
      //   component: () => import('pages/AboutUs.vue')
      // },
      // {
      //   path: '/contact-us',
      //   name: 'ContactUs',
      //   component: () => import('pages/ContactUs.vue')
      // },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
