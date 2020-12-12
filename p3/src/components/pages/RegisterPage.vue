<template>
  <div id='register'>
    <h2>Register</h2>
    <div>
      <label>Name:</label>
      <input type="text" data-test="email-input" v-model="data.name"/>
      <br>

      <label>Email:</label>
      <input type="text" data-test="email-input" v-model="data.email"/>
      <br>

      <label>Password:</label>
      <input type="password" data-test="password-input" v-model="data.password"/>
      <br>

      <button @click="register" data-test="login-button">Register</button>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from '@/common/app.js'

export default {
  data() {
    return {
      data: {
        name: '',
        email: '',
        password: ''
      },
      errors: []
    }
  },
  methods: {
    register() {
      axios.post('register', this.data).then((response) => {
        if (response.data.success) {
          this.$store.commit('setUser', this.data);
          this.$router.push('account');
        } else {
          this.errors = response.data.errors;
        }
      });
    }
  }
}
</script>
