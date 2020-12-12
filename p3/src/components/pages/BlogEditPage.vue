<template>
  <div>
    <h6>Edit this blog</h6>
    <blog-form
      :blog="blog"
      :method="'put'"
      :url="'blog/' + blog.id"
    ></blog-form>
  </div>
</template>

<script>
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
    this.blog = this.$store.getters.getBlogById(this.id);
  }
}
</script>

<style scoped>
</style>
