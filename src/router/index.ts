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
      path: '/resumedemo/basicdata/',
      component: () => import('../views/basicData'),
    },
    {
      path: '/resumedemo/certificate/',
      component: () => import('../views/certificate'),
    },
    {
      path: '/resumedemo/addremove/',
      component: () => import('../views/addRemove'),
    },
    {
      path: '/resumedemo/changetheme/',
      component: () => import('../views/changeTheme'),
    },
    {
      path: '/resumedemo/project/',
      component: () => import('../views/project'),
    },
    {
      path: '/resumedemo/education/',
      component: () => import('../views/education'),
    },
    {
      path: '/resumedemo/skill/',
      component: () => import('../views/skill'),
    },
    {
      path: '/resumedemo/workhistory/',
      component: () => import('../views/work'),
    },
    {
      path: '/resume/:id',
      component: () => import('../views/resume'),
    },
    {
      path: '/resume_mongo/:id',
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