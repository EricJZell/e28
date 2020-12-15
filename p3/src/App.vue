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
    <h2 id="login-link" class="link">
      <router-link :to="'/account'">{{ accountLinkText }}</router-link>
    </h2>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link v-if="isAdmin" :to="'/blogs/new'">
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
  computed: {
    accountLinkText() {
      return this.$store.state.user ? "My Account" : "Login";
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  },
  mounted() {
    this.$store.dispatch('fetchBlogs');
    this.$store.dispatch('authUser');
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/p2.scss';
</style>
