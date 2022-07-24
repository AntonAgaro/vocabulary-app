<script setup lang="ts">
import {useRoute} from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="container">
    <div class="letter__head">
      <h1>{{ route.params.letter }}</h1>
      <router-link class="letter__head-link" to="/vocabulary">To vocabulary</router-link>
    </div>

    <div class="words">
      <div class="words__row">
        <div class="words__item">word</div>
        <div class="words__item">translation</div>
      </div>
      <div class="words__row">
        <div class="words__item">word</div>
        <div class="words__item">translation</div>
      </div>
      <div class="words__row">
        <div class="words__item">word</div>
        <div class="words__item">translation</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 1rem;
}

.letter__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.letter__head-link {
  font-weight: 500;
  color: $main-color;
}

.words {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid $dark-color;

  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & + & {
      border-top: 1px solid $dark-color;
    }
  }

  &__item {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    word-break: break-all;

    & + & {
      border-left: 1px solid $dark-color;
    }
  }
}
</style>