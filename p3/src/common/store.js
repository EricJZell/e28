import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: []
  },
  mutations: {
    setBlogs(state, payload) {
      state.blogs = payload;
    }
  },
  actions: {
    fetchBlogs(context) {
      axios.get('blog').then((response) => {
        context.commit('setBlogs', response.data.blog);
      });
    }
  },
  getters: {
    getBlogById(state) {
      return function (id) {
        return state.blogs.find((blog) => {
          return blog.id == id;
        }) || {};
      }
    }
  }
})
