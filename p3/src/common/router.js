import VueRouter from 'vue-router';
import store from '@/common/store';

// All available routes
const routes = [
  {
    path: '/',
    component: () => import('@/components/pages/BlogsPage.vue')
  },
  {
    path: '/blogs',
    component: () => import('@/components/pages/BlogsPage.vue')
  },
  {
    path: '/blogs/new',
    component: () => import('@/components/pages/BlogCreatePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/blogs/:id',
    component: () => import('@/components/pages/BlogPage.vue'),
    props: true
  },
  {
    path: '/blogs/edit/:id',
    component: () => import('@/components/pages/BlogEditPage.vue'),
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/account',
    component: () => import('@/components/pages/AccountPage.vue')
  },
  {
    path: '/register',
    component: () => import('@/components/pages/RegisterPage.vue')
  },
  {
    path: '/denied',
    component: () => import('@/components/pages/AccessDeniedPage.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  const decide = () => {
    if (requiresAuth && !store.state.user) {
      next('/denied');
    } else {
      next();
    }
  }

  if (store.state.user === null) {
    store.dispatch('authUser').then(() => {
      decide();
    });
  } else {
    decide();
  }
})

export default router
