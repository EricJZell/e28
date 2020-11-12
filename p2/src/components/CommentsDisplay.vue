<template>
  <div>
    <h2 class="link">Comments ({{ comments.length}})</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.user_name }}: {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'comments-display',
  props: ['comments']
}
</script>
