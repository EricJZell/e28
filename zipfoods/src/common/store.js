import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        products: [],
        user: null,
        favorites: []
    },
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        setProducts(state, payload) {
            state.products = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setFavorites(state, payload) {
          state.favorites = payload;
        }
    },
    actions: {
        fetchProducts(context) {
            axios.get('product').then((response) => {
                context.commit('setProducts', response.data.product);
            });
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                    context.dispatch('fetchFavorites');
                }
            });
        },
        fetchFavorites(context) {
          axios.get('favorite').then((response) => {
            context.commit('setFavorites', response.data.favorite);
          })
        }
    },
    getters: {
        getProductById(state) {
            return function (id) {
                return state.products.filter((product) => {
                    return product.id == id;
                }, this.id)[0];
            }
        },
        getFavoriteByProductId(state) {
          return function (product_id) {
            return state.favorites.find((favorite) => {
              return favorite.product_id == product_id;
            })
          }
        }
    }
})
