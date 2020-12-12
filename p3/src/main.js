import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import store from '@/common/store';

import BlogsPage from '@/components/pages/BlogsPage.vue';
import BlogCreatePage from '@/components/pages/BlogCreatePage.vue';
import BlogEditPage from '@/components/pages/BlogEditPage.vue';
import BlogPage from '@/components/pages/BlogPage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
import RegisterPage from '@/components/pages/RegisterPage.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: BlogsPage },
        { path: '/blogs', component: BlogsPage },
        { path: '/blogs/new', component: BlogCreatePage },
        { path: '/blogs/:id', component: BlogPage, props: true },
        { path: '/blogs/edit/:id', component: BlogEditPage, props: true },
        { path: '/account', component: AccountPage },
        { path: '/register', component: RegisterPage }
    ],
})

new Vue({
  store,                  // shorthand for store: store
  router,                 // shorthand for router: router
  render: h => h(App),
}).$mount('#app')
