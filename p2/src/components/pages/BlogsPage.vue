<template>
  <div>
    <div v-for="blog in blogs" :key="blog.id">
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
  props: ['blogs'],
  data: function() {
    return {};
  }
}
</script>

<style scoped>
</style>
