<script>
export default {
  name: "Search"
}
</script>

<template>
  <div class="search-box">
    <input type="search">
  </div>
</template>

<style scoped lang="scss">
.search-box {
  input {
    display: block;
    margin: 0 auto;
    width: 60vw;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
}
</style>
