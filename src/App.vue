<script setup>
import NavBar from './components/NavBar.vue';
import Music from './components/Music.vue';
</script>

<template>
  <NavBar/>
    <div>
      <Music />
    </div>
</template>

<style>
#app {
  display: flex;
  justify-content: space-between;
}
</style>