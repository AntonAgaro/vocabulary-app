<script setup>
import AppButton from "@/components/UI/AppButton.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link class="header__title" to="/">Vocabulary</router-link>
        <app-button>Add new word</app-button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

  .header {
    height: 80px;
    background: $main-color;
    display: flex;
    align-items: center;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      font-weight: 500;
      font-size: 2rem;
      color: $light-color;
    }
  }

</style>