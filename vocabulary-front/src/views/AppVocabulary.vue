<script setup lang="ts">
import LetterButton from '@/components/LetterButton.vue';
const aplphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

</script>

<template>
  <div class="container">
    <div class="letters-wrapper">
      <letter-button v-for="letter in aplphabet" :letter="letter" :key="letter" />
    </div>
  </div>
</template>



<style scoped>
.letters-wrapper {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}
</style>