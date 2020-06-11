import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/resumedemo',
      component: () => import('../views/dashboard'),
    },
    {
      path: '/resume/:id',
      component: () => import('../views/resume'),
    },
    {
      path: '/login',
      component: () => import('../views/login'),
    },
    {
      path: '/register',
      component: () => import('../views/register'),
    },
    {
      path: '/',
      component: () => import('../views/cover'),
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   let access_token = Vue.cookies.keys

//   // if logged out
//   if (access_token().length < 2 && ((to.path != '/login')) && ((to.path != '/signup')) && ((to.path != '/maps/1'))) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// })
export default router;