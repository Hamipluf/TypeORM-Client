<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 10px;
  background-color: rgb(19, 19, 19);
}
</style>
