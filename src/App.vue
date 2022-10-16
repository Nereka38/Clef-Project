<script setup>
import NavBar from './components/NavBar.vue';
import Info from './components/Info.vue';
import TracklistInfo from './components/TracklistInfo.vue';
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