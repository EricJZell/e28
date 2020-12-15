<template>
  <div>
    <label>Search:</label>
    <input data-test="search-bar" type="text" v-model="search" />
    <div v-for="blog in filteredBlogs" :key="blog.id">
      <router-link :to="'blogs/' + blog.id" exact>
        <blog-preview :blog="blog"></blog-preview>
      </router-link>
    </div>
  </div>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue';

export default {
  name: 'blogs-page',
  components: { 'blog-preview': BlogPreview },
  data: function() {
    return {
      search: ""
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
    filteredBlogs() {
      // Don't filter until user has entered at least 2 characters
      if (this.search.length <= 2) {
        return this.blogs;
      }
      return this.blogs.filter((blog) => {
        return blog.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
      })
    }
  }
}
</script>

<style scoped>
</style>
