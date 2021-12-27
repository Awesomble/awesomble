<script setup lang="ts">
</script>

<template>
  <div class="logo">
    <div class="awesomble">AWESOMBLE</div>
    <svg viewBox="0 0 300 100" v-if="false">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em">
          어썸블
        </text>
      </symbol>
      <use xlink:href="#s-text" class="text"
      ></use>
      <use xlink:href="#s-text" class="text"
      ></use>
      <use xlink:href="#s-text" class="text"
      ></use>
      <use xlink:href="#s-text" class="text"
      ></use>
      <use xlink:href="#s-text" class="text"
      ></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
/* Main styles */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
//@import url('https://fonts.googleapis.com/css?family=Open+Sans:800');
.logo {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .awesomble {
    padding: 0 15px;
    text-align: center;
    font-size: 10vw;
    font-weight: 800;
    font-family: 'Roboto', sans-serif;
    border: 2px dashed #ccc;
    border-radius: 10px;
  }
  .text {
    fill: none;
    stroke-width: 1px;
    stroke-linejoin: round;
    stroke-dasharray: 30 100;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 3s infinite linear;
    animation: stroke 3s infinite linear;
  }

  .text:nth-child(5n + 1) {
    stroke: #93ABEA;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .text:nth-child(5n + 2) {
    stroke: #B2E6F0;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  .text:nth-child(5n + 3) {
    stroke: #FFF485;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }

  .text:nth-child(5n + 4) {
    stroke: #FFBD66;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }

  .text:nth-child(5n + 5) {
    stroke: #F07769;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }

  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
}

svg {
  //position: absolute;
  //left: 50%;
  //margin-left: -300px;
  //width: 100%;
  //height: 100%;
  //max-width: 600px;
  /* SGV drop shadow  */
}
</style>
