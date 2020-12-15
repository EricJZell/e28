<template>
  <div id="account-page">
    <div v-if="user">
      <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>
      <button @click="logout" data-test="logout-button">Logout</button>
    </div>

    <div v-else id="loginForm">
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="text" data-test="email-input" v-model="data.email"/>
        <br>

        <label>Password:</label>
        <input type="password" data-test="password-input" v-model="data.password"/>
        <br>

        <button @click="login" data-test="login-button">Login</button>
        <error-field v-if="errors" :errors="errors"></error-field>
        <h3>Not yet a member?</h3>
        <router-link :to="'/register'">
          <button data-test="register-link">Register</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from '@/common/app.js';
import ErrorField from '@/components/ErrorField.vue';

export default {
  components: {
    'error-field': ErrorField
  },
  data() {
    return {
      data: {
        email: '',
        password: ''
      },
      errors: []
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      axios.post('login', this.data).then((response) => {
        console.log(response);
        if (response.data.authenticated) {
          this.$store.commit('setUser', response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    logout() {
      axios.post('logout').then((response) => {
        if (response.data.success) {
          this.$store.commit('setUser', null);
        }
      });
    }
  }
}
</script>
