<template>
  <div id="app">
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: ['home', 'blogs', 'newBlog'],
      paths: {
        home: '/',
        blogs: '/blogs',
        newBlog: '/new-blog'
      }
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/p2.scss';
</style>
