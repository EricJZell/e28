<template>
  <form @submit.prevent="submitForm">
    <label for="title">Title</label><br>
    <input type="text" v-model="blog.title"><br>
    <error-field v-if="errors && 'title' in errors" :errors="errors.title"></error-field>
    <br>

    <label for="content">Content</label><br>
    <textarea v-model="blog.content"></textarea><br>
    <error-field v-if="errors && 'content' in errors" :errors="errors.content"></error-field>
    <br>

    <label for="video_url">Video URL</label><br>
    <input type="text" v-model="blog.video_url"><br>
    <error-field v-if="errors && 'video_url' in errors" :errors="errors.video_url"></error-field>
    <br>

    <input type="submit" value="Submit">
  </form>
</template>

<script>
import { axios } from '@/common/app.js';
import Validator from 'validatorjs'
import ErrorField from '@/components/ErrorField.vue'

export default {
  name: 'blog-form',
  components: {
    'error-field': ErrorField
  },
  data() {
    return {
      errors: null
    }
  },
  props: ['blog', 'method', 'url'],
  methods: {
    submitForm() {
      if (this.validate()) {
        axios({
          method: this.method,
          url: this.url,
          data:this.blog
        }).then((response) => {
          if (response.data.errors) {
            console.log(response.data.errors);
          } else {
            this.$store.dispatch('fetchBlogs');
            console.log(response.data)
            this.$router.push('/blogs/' + response.data.blog.id);
          }
        });
      }
    },
    validate() {
      let validator = new Validator(this.blog, {
        title: 'required|between:3,255',
        content: 'required|between:7,10000',
        video_url: 'required|between:5,1000'
      });
      this.errors = validator.errors.all();
      return validator.passes();
    }
  }
}
</script>

<style scoped>
</style>
