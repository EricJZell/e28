<template>
  <div>
    <h6>Edit this blog</h6>
    <blog-form
      :blog="blog"
      :method="'put'"
      :url="'blog/' + blog.id"
      @update-blogs="$emit('update-blogs')"
    ></blog-form>
  </div>
</template>

<script>
import { axios } from '@/app.js';
import BlogForm from '@/components/BlogForm.vue';

export default {
  name: 'blog-edit-page',
  components: { 'blog-form': BlogForm },
  props: ['id'],
  data: function() {
    return {
      blog: {}
    };
  },
  mounted() {
    axios.get('blog/' + this.id).then((response) => {
      this.blog = response.data.blog;
    })
  }
}
</script>

<style scoped>
</style>
