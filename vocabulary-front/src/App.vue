<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <div class="wrapper">
    <app-header/>
    <div class="content">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>



<style lang="scss" >
@import 'assets/sass/app';
</style>