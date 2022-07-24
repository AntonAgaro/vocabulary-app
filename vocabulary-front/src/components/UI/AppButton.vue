<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background: $second-color;
  color: $light-color;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
   background: $light-color;
   color: $second-color;
 }
}
</style>