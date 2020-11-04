<template>
    <div>
      <show-product
          :product="currentProduct"
          :show-details="true"
      ></show-product>
    </div>
</template>

<script>
import { products } from '@/products.js';
import ShowProduct from '@/components/ShowProduct.vue';

export default {
    name: '',
    components: {
      'show-product' : ShowProduct
    },
    props: ['id'],
    data() {
        return {
          products: products
        };
    },
    computed: {
        currentProduct() {
          return this.products.find(p => String(p.id) === this.id)
        }
    }
};
</script>

<style>
</style>
