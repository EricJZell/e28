<template>
    <div id="product-page">
        <div v-if="product">
            <show-product
                :product="product"
                :includeDetails="true"
            ></show-product>
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

export default {
    name: '',
    props: ['id', 'products'],
    components: {
        'show-product': ShowProduct,
    },
    data() {
        return {};
    },
    computed: {
        product() {
            return this.products.find(product => product.id == this.id)
        },
        productNotFound() {
            return this.product == null;
        },
    },
};
</script>
