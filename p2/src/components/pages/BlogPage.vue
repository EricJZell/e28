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
    <button @click="deleteBlog">Delete this blog</button>
    <router-link :to="'/blogs/edit/' + blog.id">
      <h3>Edit this blog</h3>
    </router-link>
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
  methods: {
    deleteBlog() {
      axios.delete('blog/' + this.id).then(() => {
        this.$emit('update-blogs');
        this.$router.push('/blogs');
      })
    }
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
