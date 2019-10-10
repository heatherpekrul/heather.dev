<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/nav/nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import 'assets/scss';
</style>
