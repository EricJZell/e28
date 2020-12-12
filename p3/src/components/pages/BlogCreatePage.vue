<template>
  <div>
    <h6>Create a new blog</h6>
    <blog-form
      :blog="blog"
      :method="'post'"
      :url="'blog'"
    ></blog-form>
  </div>
</template>

<script>
import BlogForm from '@/components/BlogForm.vue';

export default {
  name: 'blog-create-page',
  components: { 'blog-form': BlogForm },
  data: function() {
    return {
      // Pre-populate the video url for ease. It is 'Landslide' by Fleetwood Mac
      blog: {title: "", content: "", "video_url": "https://www.youtube.com/embed/k4M53xndqiU"}
    };
  }
}
</script>

<style scoped>
</style>
