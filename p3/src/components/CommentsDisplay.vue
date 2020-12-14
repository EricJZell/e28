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
          <textarea @blur="storeComment" class="new-comment" v-model="comment.content" type="text"/><br>
          <error-field v-if="errors && 'content' in errors" :errors="errors.content"></error-field>
          <transition name="fade">
            <div data-test="comment-added-confirmation" class="success" v-if="showConfirmation">
              Your comment has been added!
            </div>
          </transition>
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
import Validator from 'validatorjs'
import ErrorField from '@/components/ErrorField.vue'

export default {
  name: 'comments-display',
  components: {
    'error-field': ErrorField
  },
  data() {
    return {
      comments: [],
      displayComments: false,
      comment: { content: "", blog_id: this.blogId },
      errors: null,
      showConfirmation: false
    }
  },
  props: ['blogId'],
  methods: {
    storeComment() {
      localStorage.setItem('comment' + this.blogId, this.comment.content);
    },
    addComment() {
      if (this.validate()) {
        this.comment.user_name = this.user.name;
        axios.post('/comment', this.comment).then((response) => {
          if (response.data.errors) {
            console.log(response.data.errors);
          } else {
            var newComment = { ...this.comment };
            this.comments.push(newComment);
            this.comment = { content: '', blog_id: this.blogId };
            this.showConfirmation = true;
            localStorage.removeItem('comment' + this.blogId);

            setTimeout(() => {
              this.showConfirmation = false;
            }, 2500);
          }
        });
      }
    },
    validate() {
      let validator = new Validator(this.comment, {
        content: 'required|between:2,255'
      });
      this.errors = validator.errors.all();
      return validator.passes();
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.comment.content = localStorage.getItem('comment' + this.blogId);

    axios.get('comment/query?blog_id=' + this.blogId).then((response) => {
      this.comments = response.data.results;
    })
  }
}
</script>
