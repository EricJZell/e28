<template>
  <div id="denied">
    <h1>Access Denied</h1>
    <p>
      Only logged-in users can access this feature.
    </p>
    <router-link :to="'/account'">
      <h2 class="link">Click here to log in</h2>
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
