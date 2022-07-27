<script lang="ts" setup>
  const props = defineProps({
    isDisabled: Boolean
  })
</script>
<template>
  <button class="button" :class="{'disabled': props.isDisabled}">
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
  &.disabled {
    pointer-events: none;
    background: #ccc;
  }
}
</style>