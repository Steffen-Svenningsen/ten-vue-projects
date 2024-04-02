<template>
  <nav>
    <router-link to="/todo-app">Todo-app</router-link>
    <router-link to="/todo-app">Todo-app</router-link>
    <router-link to="/todo-app">Todo-app</router-link>
    <router-link to="/todo-app">Todo-app</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 840px;
}

a {
  display: block;
  width: 300px;
  height: 64px;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #a4a4a4;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #1b1b1b;
  transition: 0.2s;
}

a:hover {
  background-color: #f2f2f2;
  transform: scale(1.02);
}
</style>
