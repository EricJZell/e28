<template>
  <div id="app">
    <div class="header">
      <router-link :to="'/'">
        <h1 class="page-title">Pickin' a Tune</h1>
        <h2 class="link">
          Some of my favorite finger picked guitar style songs
        </h2>
      </router-link>
    </div>
    <router-view
      :blogs="blogs"
      @update-blogs="updateBlogs"
    ></router-view>
    <div class="footer">
      <router-link :to="'/blogs/new'">
        <h2 class="link">
          New Blog
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script>

import { axios } from '@/app.js'

export default {
  name: 'App',
  data() {
    return {
      blogs: [],
    }
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
}
</script>

<style lang='scss'>
@import '@/assets/scss/p2.scss';
</style>
