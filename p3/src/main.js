import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import BlogsPage from '@/components/pages/BlogsPage.vue';
import BlogCreatePage from '@/components/pages/BlogCreatePage.vue';
import BlogEditPage from '@/components/pages/BlogEditPage.vue';
import BlogPage from '@/components/pages/BlogPage.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: BlogsPage },
        { path: '/blogs', component: BlogsPage },
        { path: '/blogs/new', component: BlogCreatePage },
        { path: '/blogs/:id', component: BlogPage, props: true },
        { path: '/blogs/edit/:id', component: BlogEditPage, props: true }
    ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
