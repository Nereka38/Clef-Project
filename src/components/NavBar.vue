<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="container-navbar">
<ul class="nav flex-column">
    <a class="navbar-brand" href="#">
    <img src="https://cdn.dribbble.com/users/1541680/screenshots/4870925/media/1d1b2cad045110b6301228432918ab66.png?compress=1&resize=400x300" width="100" height="100" class="d-inline-block align-top" alt="">
  </a>
    <li class="nav-item">
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/explore">Explore</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/mymusic">My Music</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/calendar">Calendar</RouterLink>
    </li>
  </ul>
</nav>
</template>


<style scoped lang="css">
.nav {
background-color:blueviolet;
display:flex;
justify-content: left;
align-items: center;
width: 200px;
}

.nav-link {
  color: white !important;
}

.container-navbar {
  display:flex;
}

a {
  color: white;
  text-decoration: none;
  margin: 1vw;
}

a:hover {
  color: rgb(255, 255, 255);
}

.nav-item:hover {
background: rgba(173, 102, 240, 0.349);
opacity: 0.8;
}

.nav-item {
  padding: 1vw;
}
</style>