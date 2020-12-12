import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [],
    user: null
  },
  mutations: {
    setBlogs(state, payload) {
      state.blogs = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    fetchBlogs(context) {
      axios.get('blog').then((response) => {
        context.commit('setBlogs', response.data.blog);
      });
    },
    authUser(context) {
      axios.post('auth').then((response) => {
        if (response.data.authenticated) {
          context.commit('setUser', response.data.user);
        }
      })
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
