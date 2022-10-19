<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
im
</script>

<template>
  <NavBar/>
    <div>
      <RouterView />
    </div>
</template>

<style>
#app {
  display: flex;
  margin: auto;
}
</style>