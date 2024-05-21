<script setup>
import HeroComponent from '../components/LoginForm.vue'
</script>

<template>
  <main>
    <HeroComponent />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 90vw;
}
</style>
