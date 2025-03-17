<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue'
import Lenis from 'lenis'

import 'lenis/dist/lenis.css'


onMounted(() => {
  new Lenis({
    autoRaf: true
  })
})
</script>

<template>
  <Navbar/>
  <router-view v-slot="{ Component, route }">
    <component :is="Component"/>
  </router-view>
</template>

<style scoped></style>
