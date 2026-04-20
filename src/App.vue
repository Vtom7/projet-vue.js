<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  <main class="page">
    <RouterView />
  </main>
</template>

<style>
.page {
  padding-top: 80px;
}
</style>