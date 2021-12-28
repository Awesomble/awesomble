<script setup lang="ts">
const search = () : void  => {
  alert('준비중입니다.')
}
</script>

<template>
  <div class="search-box">
    <form onsubmit="event.preventDefault();" role="search">
      <label for="search">검색</label>
      <input id="search" type="search" placeholder=" " autofocus required />
      <button type="submit" @click="search">A</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.search-box {
  // Main styles
  width: calc(70% + 30px);
  max-width: 400px;
  margin: 0 auto;
  form {
    position: relative;
    width: calc(70% + 3rem);
    padding: 15px;
    border-radius: .7rem;
    border: 2px dashed #ccc;
  }
  input, button {
    height: 5rem;
    max-height: 50px;
    border: 0;
    color: #2f2f2f;
    font-size: 1.8rem;
  }
  input[type="search"] {
    outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
    width: 100%;
    background: #fff;
    padding: 0 1.6rem;
    border-radius: .7rem;
    appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
    transition: all .3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
    border: 1px solid #000;
  }
  button {
    display: none; // prevent being able to tab to it
    position: absolute;
    top: 15px;
    right: 15px;
    width: 3rem;
    font-weight: bold;
    background: #000;
    animation: gradient 15s ease infinite;
    border-radius: 0 .7rem .7rem 0;
    color: #fff;
  }
  input:not(:placeholder-shown) {
    border-radius: .7rem 0 0 .7rem;
    width: calc(100% - 3rem);
    + button {
      display: block;
    }
  }
  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
