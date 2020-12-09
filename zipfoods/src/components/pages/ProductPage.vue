<template>
    <div id="product-page">
        <div v-if="product">
            <show-product
                :product="product"
                :includeDetails="true"
            ></show-product>

            <div v-if="user">

              <button v-show="!favorite" data-test="add-to-favorites" @click="addToFavorites">
                Add to favorites
              </button>
              <button v-show="favorite" data-test="remove-from-favorites" @click="removeFromFavorites">
                Remove From Favorites
              </button>
            </div>

            <button data-test="add-to-cart-button" v-on:click="addToCart">
                Add to Cart
            </button>

            <transition name="fade">
                <div
                    data-test="add-to-cart-confirmation"
                    class="alert"
                    v-if="addAlert"
                >
                    Your cart has been updated!
                </div>
            </transition>
        </div>

        <div v-if="productNotFound">
            <p>Product {{ id }} not found.</p>

            <router-link v-bind:to="'/products'"
                >Go to all products
            </router-link>
        </div>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';
import { cart } from '@/common/app.js';
import { axios } from '@/common/app.js';

export default {
    name: '',
    props: ['id'],
    components: {
        'show-product': ShowProduct,
    },
    data() {
        return {
            addAlert: false,
        };
    },
    computed: {
        product() {
            return this.$store.getters.getProductById(this.id);
        },
        productNotFound() {
            return this.product == null;
        },
        products() {
            return this.$store.state.products;
        },
        user() {
          return this.$store.state.user;
        },
        favorite() {
          return this.$store.getters.getFavoriteByProductId(this.id);
        }
    },
    methods: {
        addToCart() {
            cart.add(this.product.id, 1);

            this.$store.commit('setCartCount', cart.count());

            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        },
        addToFavorites() {
          axios.post('favorite', { product_id: this.id }).then((response) => {
            if (response.data.success) {
              this.$store.dispatch("fetchFavorites");
            }
          })
        },
        removeFromFavorites() {
          axios.delete('favorite/' + this.favorite.id).then((response) => {
            if (response.data.success) {
              this.$store.dispatch("fetchFavorites");
            }
          })
        }
    },
};
</script>
