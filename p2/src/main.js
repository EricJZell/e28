import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import BlogsPage from '@/components/pages/BlogsPage.vue';
import CreatePage from '@/components/pages/CreatePage.vue';
import BlogPage from '@/components/pages/BlogPage.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/blogs', component: BlogsPage },
        { path: '/create', component: CreatePage },
        { path: '/blogs/:id', component: BlogPage, props: true }
    ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
