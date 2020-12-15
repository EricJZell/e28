<template>
  <div id="denied">
    <h1>Access Denied</h1>
    <p>
      Only Admin users can access this feature.
    </p>
    <router-link :to="'/'">
      <h2 class="link">Back Home</h2>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'access-denied',
  data() {
    return {};
  }
}

</script>
