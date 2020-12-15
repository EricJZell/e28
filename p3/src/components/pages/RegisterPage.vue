<template>
  <div id='register'>
    <h2>Register</h2>
    <div>
      <label>Name:</label>
      <input type="text" data-test="name-input" v-model="data.name"/>
      <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>
      <br>

      <label>Email:</label>
      <input type="text" data-test="email-input" v-model="data.email"/>
      <error-field v-if="errors && 'email' in errors" :errors="errors.email"></error-field>
      <br>

      <label>Password:</label>
      <input type="password" data-test="password-input" v-model="data.password"/>
      <error-field v-if="errors && 'password' in errors" :errors="errors.password"></error-field>
      <br>

      <button @click="register" data-test="register-button">Register</button>
      <error-field v-if="serverErrors" :errors="serverErrors"></error-field>
    </div>
  </div>
</template>

<script>
import Validator from 'validatorjs'
import ErrorField from '@/components/ErrorField.vue';
import { axios } from '@/common/app.js'

export default {
  name: 'register-page',
  components: {
    'error-field': ErrorField
  },
  data() {
    return {
      data: {
        name: '',
        email: '',
        password: ''
      },
      // Client-Side Validator errors are returned as an object
      // Server errors are an array. Therefore, we need different variables
      errors: null,
      serverErrors: null
    }
  },
  methods: {
    register() {
      // I chose not to perform client side validations until user attempts to
      // to submit the form
      if (this.validate()) {
        axios.post('register', this.data).then((response) => {
          if (response.data.success) {
            this.$store.commit('setUser', this.data);
            this.$router.push('account');
          } else {
            this.serverErrors = response.data.errors;
          }
        });
      }
    },
    validate() {
      let validator = new Validator(this.data, {
        name: 'required|between:2,50',
        email: 'required|email',
        password: 'required|between:8,20'
      });
      this.errors = validator.errors.all();
      return validator.passes();
    }
  }
}
</script>
