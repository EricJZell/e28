<template>
  <form @submit.prevent="submitForm">
    <label for="title">Title</label><br>
    <input type="text" v-model="blog.title"><br>

    <label for="content">Content</label><br>
    <textarea v-model="blog.content"></textarea><br>

    <label for="video_url">Video URL</label><br>
    <input type="text" v-model="blog.video_url"><br>
    <input type="submit" value="Submit">
  </form>
</template>

<script>
import { axios } from '@/app.js';

export default {
  name: 'blog-form',
  props: ['blog', 'method', 'url'],
  methods: {
    submitForm() {
      axios({
        method: this.method,
        url: this.url,
        data:this.blog
      }).then((response) => {
        if (response.data.errors) {
          console.log(response.data.errors);
        } else {
          this.$emit('update-blogs');
          console.log(response.data)
          this.$router.push('/blogs/' + response.data.blog.id);
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
