<script setup>
import { RouterLink } from 'vue-router'
import Music from './components/Music.vue';
</script>

<template>
  <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link"><RouterLink to="/">Home</RouterLink></a>
  </li>
  <li class="nav-item">
    <a class="nav-link"><RouterLink to="/new">New Music</RouterLink></a>
  </li>
</ul>
  <Music />
</template>

<style scoped>
.nav .flex-column {
color:blueviolet;
}

</style>
