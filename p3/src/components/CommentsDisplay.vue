<template>
  <div>
    <h2
      @click="displayComments = !displayComments"
      class="link"
    >
      Comments ({{ comments.length}})
    </h2>
    <div v-show="displayComments">
      <ul class="comments-list">
        <li class="comment" v-for="comment in comments" :key="comment.id">
          <strong>{{ comment.user_name }}:</strong> {{ comment.content }}
        </li>
      </ul>
      <div v-if="user">
        <h4 for="user_name">Comment as {{ user.name }}:</h4>
        <form @submit.prevent="addComment">
          <textarea class="new-comment" v-model="comment.content" type="text"/><br>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div v-else>
        <h2 class="link">
          <router-link :to="'/account'">Login to comment</router-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from '@/common/app.js';

export default {
  name: 'comments-display',
  data() {
    return {
      comments: [],
      displayComments: false,
      comment: { content: "", blog_id: this.blogId }
    }
  },
  props: ["blogId"],
  methods: {
    addComment() {
      this.comment.user_name = this.user.name;
      axios.post('/comment', this.comment).then((response) => {
        if (response.data.errors) {
          console.log(response.data.errors);
        } else {
          var newComment = { ...this.comment };
          this.comments.push(newComment);
          this.comment = { user_name: this.user.name, content: "", blog_id: this.blogId }
        }
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    axios.get('comment/query?blog_id=' + this.blogId).then((response) => {
      this.comments = response.data.results;
    })
  }
}
</script>
