<script setup>
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>

<template>
  <main>
    <h1>10 Quick Vue Projects</h1>
    <NavigationMenu />
    <p class="info-msg">More to come..</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
}

h1 {
  text-align: center;
}

.info-msg {
  margin-top: 6rem;
  font-size: 12px;
  opacity: 0.5;
}
</style>
