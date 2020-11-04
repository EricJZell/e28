<template>
    <div id="products">
        <h2>Products</h2>
        <router-link
            v-for="product in products"
            :key="product.id"
            :to="'/products/' + product.id"
        >
            <show-product
                :key="product.id"
                :product="product"
                :show-details="false"
            ></show-product>
        </router-link>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';
import { products } from '@/products.js';

export default {
    name: '',
    components: {
        'show-product': ShowProduct,
    },
    data: function () {
        return {
            products: products,
        };
    },
};
</script>

<style scoped>
</style>
