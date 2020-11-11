<template>
  <div>
    <div v-for="blog in blogs" :key="blog.id">
      <router-link :to="'blogs/' + blog.id" exact>
        <h3>{{ blog.title }}</h3>
      </router-link>
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
