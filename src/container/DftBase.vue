<script setup lang="ts">
import HeaderArea from '@/components/common/Header.vue'
import FooterArea from '@/components/common/Footer.vue'
</script>
<template>
  <header-area />
  <router-view />
  <footer-area v-if="true" />
</template>
