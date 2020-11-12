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
    <comments-display :comments="comments"></comments-display>
    <router-link :to="'/'">
      <h2 class="link">
        Back Home
      </h2>
    </router-link>
    <router-link :to="'/blogs/edit/' + blog.id">
      <h2 class="link">Edit this blog</h2>
    </router-link>
    <h2 class="link" @click="deleteBlog">Delete this blog</h2>
  </div>
</template>

<script>
import { axios } from '@/app.js';
import BlogPreview from '@/components/BlogPreview.vue';
import CommentsDisplay from '@/components/CommentsDisplay.vue';

export default {
  name: 'blog-page',
  props: ['id', 'show-video'],
  components: { 'blog-preview': BlogPreview, 'comments-display': CommentsDisplay },
  data: function() {
    return {
      blog: {},
      comments: []
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
      axios.get('comment/query?blog_id=' + this.blog.id).then((commentsResponse) => {
        this.comments = commentsResponse.data.results;
      })
    })
  }
}
</script>
