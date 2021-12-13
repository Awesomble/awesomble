<template>
  <header>
    <header-area />
  </header>
  <main class="main">
    <router-view />
  </main>
  <footer>
    <footer-area />
  </footer>
</template>
<script setup lang="ts">
import headerArea from '@/components/header/Header.vue'
import footerArea from '@/components/footer/Footer.vue'
</script>
