<template>
  <div>
    <div v-for="blog in blogs" :key="blog.id">
      <h3>{{ blog.title }}</h3>
      <iframe
        width="420"
        height="315"
        :src="blog.video_url"
      >
      </iframe>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogs-page',
  props: ['blogs'],
  data: function() {
    return {};
  }
}
</script>

<style scoped>
</style>
