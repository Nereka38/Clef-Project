<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <NavBar/>
  <div class="views">
      <RouterView />
    </div>
</template>

<style>
#app {
  display: flex;
  margin: auto;
}

.views {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;

}
</style>