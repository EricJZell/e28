<template>
  <h6>This is blog #
    {{ id }}</h6>
</template>

<script>
export default {
  name: 'blog-page',
  props: ['id'],
  data: function() {
    return {};
  }
}
</script>

<style scoped>
</style>
