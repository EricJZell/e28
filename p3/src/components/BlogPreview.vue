<template>
  <div>
    <h2 class="blog-title">{{ blog.title }}</h2>
    <h6>{{ new Date(blog.created_at).toLocaleDateString() }}</h6>
  </div>
</template>

<script>
  export default {
    props: ['blog']
  }
</script>
