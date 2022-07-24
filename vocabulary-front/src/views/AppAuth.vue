<script setup lang="ts">
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";

const userData = ref({
  login: '',
  password: ''
})

</script>

<template>
  <div class="container">
    <h2 class="title">Sign In</h2>
    <form class="form">
      <app-input
        type="text"
        id="login"
        label="Login"
        :modelValue="userData.login"
        v-model="userData.login"
      />
      <app-input
        type="password"
        id="password"
        label="Password"
        :modelValue="userData.password"
        v-model="userData.password"
      />
      <app-button class="form__button">Sign In</app-button>
    </form>

    <div class="to-sign-up">Not registered? <router-link class="link" to="/sign-up">Sign Up</router-link></div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-top: 2rem;
  }

  .title {
    margin-bottom: 2rem;
  }

  .form {
    margin-bottom: 1rem;

    &__button {
      margin-top: 1rem;
    }
  }

  .to-sign-up {
    font-size: 1rem;
  }

  .link {
    color: $main-color;
    font-weight: 500;
  }
</style>