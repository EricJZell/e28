<template>
    <div id="app">
        <img
            alt="ZipFoods logo"
            id="logo"
            src="@/assets/images/zipfoods-logo.png"
        />

        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                        exact
                        >{{ link }}</router-link
                    >
                </li>
            </ul>
        </nav>

        <router-view :products="products"></router-view>
    </div>
</template>

<script>
import { axios } from '@/app.js'

export default {
    name: 'App',
    data() {
        return {
            /* Store links in an array to maintain order */
            links: ['home', 'products', 'categories'],

            /* Map links to the appropriate component */
            paths: {
                home: '/',
                products: '/products',
                categories: '/categories',
            },
            products: []
        };
    },
    methods: {
      updateBlogs() {
        axios.get('blog').then((response) => {
          this.blogs = response.data.blog
        });
      }
    },
    mounted() {
      this.updateBlogs();
    }
};
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
