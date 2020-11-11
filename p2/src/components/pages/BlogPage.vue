<template>
  <div>
    <h3>{{ blog.title }}</h3>
    <iframe
      width="560"
      height="315"
      :src="blog.video_url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <p>{{ blog.content }}</p>
  </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
  name: 'blog-page',
  props: ['id', 'msg'],
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
