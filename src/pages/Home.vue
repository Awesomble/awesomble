<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/logo/Logo.vue'
import Search from '@/components/search/Search.vue'
export default defineComponent({
  name: 'Home',
  components: {Search, Logo}
})
</script>

<template>
  <div>
    <logo />
    <search />
  </div>
</template>


