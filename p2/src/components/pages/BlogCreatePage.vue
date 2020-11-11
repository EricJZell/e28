<template>
  <div>
    <h6>Create a new blog</h6>
    <form @submit.prevent="addBlog">
      <label for="title">Title</label><br>
      <input type="text" v-model="blog.title"><br>

      <label for="content">Content</label><br>
      <textarea v-model="blog.content"></textarea><br>

      <label for="video_url">Video URL</label><br>
      <input type="text" v-model="blog.video_url"><br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
  name: 'blog-create-page',
  data: function() {
    return {
      blog: {title: "", content: "", "video_url": "https://www.youtube.com/embed/woMh7DvOt_Q"}
    };
  },
  methods: {
    addBlog() {
      axios.post('/blog', this.blog).then((response) => {
        if (response.data.errors) {
          console.log("loser!");
        } else {
          console.log("yeaaa");
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
