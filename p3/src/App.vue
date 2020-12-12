<template>
  <div id="app">
    <div class="header">
      <router-link :to="'/'">
        <h1 class="page-title">Pickin' Tunes</h1>
        <h2 class="link">
          Some of my favorite finger picked guitar style songs
        </h2>
      </router-link>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
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

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('fetchBlogs');
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/p2.scss';
</style>
