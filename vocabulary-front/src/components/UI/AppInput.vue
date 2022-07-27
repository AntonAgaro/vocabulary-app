<script setup lang="ts">

  interface AppInputProps {
    type: string;
    label: string;
    id: string;
    modelValue: string;
  }
  const props = defineProps<AppInputProps>();
  defineEmits(['update:modelValue']);

</script>

<template>
  <label class="label" :for="props.id">
    {{props.label}}:
    <input
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
      :id="props.id"
      :type="props.type"
    >
  </label>
</template>

<style lang="scss" scoped>
  .label {
    display: flex;
    flex-direction: column;

    & + & {
      margin-top: 1rem;
    }
  }

  .input {
    margin-top: 0.5rem;
    width: 100%;
    max-width: 500px;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid $dark-color;
    outline: none;
    &:focus {
      border: 1px solid $main-color;
    }
  }

</style>