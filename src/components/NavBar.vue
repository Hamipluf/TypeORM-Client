<template>
  <nav class="container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-code"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l-4 4l4 4" />
      <path d="M17 8l4 4l-4 4" />
      <path d="M14 4l-4 16" />
    </svg>
    <ul class="navbar">
      <a v-if="loggin" href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/register">Signin</a>
    </ul>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: #5d5c5c;
}
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  margin: 0 10px;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  font-weight: 800;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #dadada;
}
a:hover {
  background-color: #a5a5a5;
  color: #141414;
}
</style>

<script>
export default {
  data() {
    return {
      loggin: false
    }
  }
}
</script>
