<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar/>
  <router-view v-slot="{ Component, route }">
      <component :is="Component" />
  </router-view>
</template>

<style scoped>

</style>
