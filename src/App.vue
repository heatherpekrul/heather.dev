<template>
  <div id="app">
    <Nav />
    <main role="main">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer/footer.vue';
import Nav from '@/components/nav/nav.vue';

export default {
  components: {
    Footer,
    Nav,
  },
};
</script>

<style lang="scss">
@import 'assets/scss';
</style>
