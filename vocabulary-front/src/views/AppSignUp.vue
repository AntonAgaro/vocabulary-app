<script setup>
import db from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";

const userData = ref({
  login: '',
  password: '',
  confirmPass: ''
})

const createUser = async () => {
  const {login, password, confirmPass } = userData.value;
  if (!login || !password || !confirmPass || (password !== confirmPass)) return;
  try {
    const docRef = await addDoc(collection(db, "users"), {
      login,
      password,
      created_at: new Date
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log(e)
  } finally {
    userData.value.login = '';
    userData.value.password = '';
    userData.value.confirmPass = '';
  }
}

</script>

<template>
  <div class="container">
    <h2 class="title">Sign Up</h2>
    <form class="form" @submit.prevent="createUser">
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
      <app-input
        type="password"
        id="confirm"
        label="Confirm password"
        :modelValue="userData.confirmPass"
        v-model="userData.confirmPass"
      />
      <app-button class="form__button">Sign Up</app-button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 2rem;
}

.title {
  margin-bottom: 2rem;
}

.form__button {
  margin-top: 1rem;
}
</style>