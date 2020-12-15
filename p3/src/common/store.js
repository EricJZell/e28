import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

const adminUsers = ["jill@harvard.edu"];

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
      return new Promise((resolve) => {
        axios.post('auth').then((response) => {
          if (response.data.authenticated) {
            context.commit('setUser', response.data.user);
          } else {
            context.commit('setUser', false);
          }

          resolve();
        })
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
    },
    isAdmin(state) {
      return state.user && adminUsers.includes(state.user.email.toLowerCase());
    }
  }
})
