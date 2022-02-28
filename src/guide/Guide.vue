<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Guide',
  components: { },
});
</script>

<template>
  <div class="abs-guide">
    <h1>
      UI Style Guidelines
    </h1>

    <section>
      <h2>01. Colors</h2>
      <div class="cont">
        <div class="abs-flex st">
          <span>Brand Colors</span>
          <div class="abs-flex">
            <div>
              <div class="primary" style="width:30px; height:30px;"></div>
            </div>
            <div>
              <div class="primary" style="width:30px; height:30px;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section></section>
  </div>
</template>

<style scoped lang="scss">
@function get-vw($target) {
  $vw-context: (375*.01) * 1px;
  @return ($target/$vw-context) * 1vw;
}

.abs-guide{
  height:100vh;
  padding:get-vw(40px);
  background-color:#F3F3F3;
  h1, h2 {
    font-weight:600;
  }
  section{
    padding:get-vw(10px);
    background:#FFF;
  }
  .cont{

  }
}

.abs-flex{
  display:flex;
}
.abs-flex.st{
  align-items: start;
  justify-content: space-between;
}
.primary{
  background-color:#092C4C;
}
</style>
