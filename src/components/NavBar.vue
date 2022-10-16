<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="container-navbar">
<ul class="nav flex-column">
    <a class="navbar-brand" href="#">
    <img src="..." width="30" height="30" class="d-inline-block align-top" alt="">
    Clef
  </a>
    <li class="nav-item">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/explore" class="nav-link">Explore</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/mymusic" class="nav-link">My Music</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/calendar" class="nav-link">Calendar</RouterLink>
    </li>
  </ul>
</nav>
</template>


<style scoped lang="css">
.nav {
background-color:blueviolet;
display:flex;
justify-content: left;
width: 200px;
}

.nav-link {
  color: white !important;
}

.container-navbar {
  display:flex;
  justify-content:left;
  margin: 0 5vw 0 0;
}
</style>