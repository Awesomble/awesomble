<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/logo/Logo.vue'
import Search from '@/components/search/Search.vue'
import Salary from '@/components/salary/Salary.vue'
export default defineComponent({
  name: 'Home',
  components: {Search, Logo}
})
</script>

<template>
  <div>
    <logo />
    <search />
    <div class="direct-app">
      <a href="https://salary.awesomble.com">
        <img src="@/assets/images/ico_salary.png" alt="어썸블 월급 계산기" />
        <p>월급 계산기</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
 .direct-app {
   margin-top: 50px;
   display: flex;
   justify-content: center;
   a {
     display: flex;
     align-items: center;
     flex-direction: column;
     img {
       width: 50px;
       height: 50px;
     }
     p {
       margin-top: 10px;
       font-size: 14px;
     }
   }
 }
</style>