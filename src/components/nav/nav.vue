<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import 'style';
</style>
