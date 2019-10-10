<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__copyright">
      &copy; Copyright {{ currentYear() }} Heather Pekrul. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss';
@import 'footer';
</style>
