import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import router from '@/common/router.js';
import store from '@/common/store';

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  store,                  // shorthand for store: store
  router,                 // shorthand for router: router
  render: h => h(App),
}).$mount('#app')
