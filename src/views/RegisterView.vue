<script setup>
import RegisterForm from '@/components/RegisterForm.vue'
</script>

<template>
  <section class="container">
    <div class="title">
      <h3>Api Rest Con TypeORM y VUE</h3>
    </div>
    <RegisterForm />
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}
.title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: underline;
  text-decoration-color: #e6e1e7;
  text-underline-offset: 8px;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fafafa;
}
</style>
