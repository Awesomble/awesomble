<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/logo/Logo.vue';
import Search from '@/components/search/Search.vue';
import Salary from '@/components/salary/Salary.vue';

export default defineComponent({
  name: 'Home',
  components: { Search, Logo },
});
</script>

<template>
  <ul class="asb-visual">
    <li>
      <div class="asb-intro vis-main">
        <strong class="asb-tit">
          Get instant help<br/>
          whenever you need ,<br/>
          we are there
        </strong>
        <p class="asb-subTit">Do you face any trouble with your vehicles?</p>
        <p class="asb-desc">Many time suddenly we got fallen into a bad
          situation with our vehicles Don’t worry like this situation,
          we are here to help you . </p>
      </div>
    </li>
  </ul>
</template>
