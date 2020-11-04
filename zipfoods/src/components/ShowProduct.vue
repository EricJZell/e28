<template>
    <div class="product">
        <div class="product-name">{{ product.name }}</div>
        <img
            class="product-thumb"
            v-bind:src="
                require('@/assets/images/products/' + product.id + '.jpg')
            "
        />
        <p v-if="showDetails" class="product-description">{{ product.description }}</p>
        <div v-if="showDetails" class="product-price">${{ product.price }}</div>
    </div>
</template>

<script>
export default {
    name: 'show-product',
    props: ['product', 'showDetails'],
    data: function () {
        return {};
    },
};
</script>

<style scoped>
</style>
