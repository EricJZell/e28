<template>
  <div>
    <iframe
      width="100%"
      height="400px"
      :src="blog.video_url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <blog-preview :blog="blog"></blog-preview>
    <p>{{ blog.content }}</p>
    <comments-display :comments="comments" :blogId="id"></comments-display>
    <router-link :to="'/'">
      <h2 class="link">
        Back Home
      </h2>
    </router-link>
    <router-link v-if="isAdmin" :to="'/blogs/edit/' + blog.id">
      <h2 class="link">Edit this blog</h2>
    </router-link>
    <h2 v-if="isAdmin" class="link" @click="deleteBlog">Delete this blog</h2>
  </div>
</template>

<script>
import { axios } from '@/common/app.js';
import BlogPreview from '@/components/BlogPreview.vue';
import CommentsDisplay from '@/components/CommentsDisplay.vue';

export default {
  name: 'blog-page',
  props: ['id', 'show-video'],
  components: { 'blog-preview': BlogPreview, 'comments-display': CommentsDisplay },
  data: function() {
    return {
      comments: []
    };
  },
  computed: {
    blog() {
      return this.$store.getters.getBlogById(this.id);
    },
    user() {
      return this.$store.state.user;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  },
  methods: {
    deleteBlog() {
      axios.delete('blog/' + this.id).then(() => {
        this.$store.dispatch('fetchBlogs')
        this.$router.push('/blogs');
      })
    }
  }
}
</script>
