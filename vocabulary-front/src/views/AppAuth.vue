<script setup>
import db from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import AppInput from "@/components/UI/AppInput.vue";
import AppButton from "@/components/UI/AppButton.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const userData = ref({
  login: '',
  password: ''
})

const disabledBtn = ref(false);
const errorMsg = ref('');

const router = useRouter();

const authUser = async () => {
  try {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    const users = usersSnapshot.docs.map(doc => doc.data());
    const checkUser = users.find(user => {
      return user.login === userData.value.login && user.password === userData.value.password;
    })
    if (checkUser) {
      router.push({name: 'vocabulary', params: {id: checkUser.id, login: checkUser.login, password: checkUser.password} })
    } else {
      errorMsg.value = 'Такого пользователя нет!'
    }

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
    <div class="error" v-if="errorMsg">{{ errorMsg }}</div>
    <form class="form" @submit.prevent="authUser">
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

  .error {
    color: red;
    margin: 1rem 0;
  }
</style>