<script setup lang="ts">
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const userData = ref({
  login: '',
  password: ''
})

const disabledBtn = ref(false);

const router = useRouter();

const sendUserData = async () => {
  disabledBtn.value = true;
  const data = {
    login: userData.value.login,
    password: userData.value.password
  }
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    console.log(response)
    const json = await response.json();
    if (json.login === 'success' && json.user) {
      const {id, login, password} = json.user;
      router.push({name: 'vocabulary', params: {id, login, password} })
    }
    console.log(json);
  } catch (e) {
    console.log(e)
  } finally {
    userData.value.login = '';
    userData.value.password = '';
    disabledBtn.value = false;
  }
}

</script>

<template>
  <div class="container">
    <h2 class="title">Sign In</h2>
    <form class="form" @submit.prevent="sendUserData">
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
      <app-button class="form__button" :is-disabled="disabledBtn">Sign In</app-button>
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