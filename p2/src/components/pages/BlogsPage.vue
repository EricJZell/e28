<template>
  <div>
    <div v-for="blog in blogs" :key="blog.id">
      <h3>{{ blog.title }}</h3>
      <iframe
        width="560"
        height="315"
        :src="blog.video_url"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
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
