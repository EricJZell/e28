<template>
  <div>
    <h2
      @click="displayComments = !displayComments"
      class="link"
    >
      Comments ({{ comments.length}})
    </h2>
    <div v-show="displayComments">
      <form @submit.prevent="addComment">
        <label for="user_name">Comment As:</label>
        <input v-model="comment.user_name" type="text"/><br>
        <label for="user_name">Comment:</label>
        <textarea class="new-comment" v-model="comment.content" type="text"/><br>
        <button type="submit">Submit</button>
      </form>
      <ul class="comments-list">
        <li class="comment" v-for="comment in comments" :key="comment.id">
          <strong>{{ comment.user_name }}:</strong> {{ comment.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
  name: 'comments-display',
  data() {
    return {
      comments: [],
      displayComments: false,
      comment: { user_name: "", content: "", blog_id: this.blogId }
    }
  },
  props: ["blogId"],
  methods: {
    addComment() {
      axios.post('/comment', this.comment).then((response) => {
        if (response.data.errors) {
          console.log(response.data.errors);
        } else {
          var newComment = { ...this.comment };
          this.comments.push(newComment);
          this.comment = { user_name: "", content: "", blog_id: this.blogId }
        }
      });
    }
  },
  mounted() {
    axios.get('comment/query?blog_id=' + this.blogId).then((response) => {
      this.comments = response.data.results;
    })
  }
}
</script>
