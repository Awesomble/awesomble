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
  <section class="asb-visual">
    <ul>
      <li>
        <div class="asb-intro vis-main">
          <em class="asb-tit">
            Get instant help<br/>
            whenever you need ,<br/>
            we are there
          </em>
          <p class="asb-subTit">Do you face any trouble with your vehicles?</p>
          <p class="asb-desc">Many time suddenly we got fallen into a bad
            situation with our vehicles Don’t worry like this situation,
            we are here to help you . </p>
        </div>
      </li>
    </ul>
  </section>
  <section>
    <div class="asb-business">
      <div class="asb-titArea">
        <span class="asb-index">Our Business</span>
        <em class="asb-tit">Perfect Soluation For your Vehicles.</em>
      </div>
      <ul>
        <li>
          <div class="asb-card">

          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
