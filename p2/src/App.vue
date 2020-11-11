<template>
  <div id="app">
    <nav>
      <ul>
        <li
          v-for="link in links"
          :key="link"
        >
          <router-link
            :to="paths[link]"
            exact
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view
      :blogs="blogs"
      @update-blogs="updateBlogs()"
    ></router-view>
  </div>
</template>

<script>

import { axios } from '@/app.js'

export default {
  name: 'App',
  data() {
    return {
      blogs: [],
      links: ['home', 'blogs', 'add a blog'],
      paths: {
        home: '/',
        blogs: '/blogs',
        'add a blog': '/blogs/new'
      }
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
