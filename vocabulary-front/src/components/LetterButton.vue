<script setup lang="ts">
  const props = defineProps( {
    letter: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <router-link class="letter" :to="`/vocabulary/${props.letter}`">
    {{ props.letter }}
  </router-link>
</template>

<style lang="scss" scoped>
.letter {
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: $main-color;
}
</style>