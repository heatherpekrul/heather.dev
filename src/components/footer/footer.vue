<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__copyright">
      &copy; Copyright {{ currentYear() }} Heather Pekrul. All rights reserved.
    </div>
    <ul class="footer__social">
      <li>
        <a href="https://github.com/heatherpekrul" target="_blank">
          Github
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/heatherpekrul" target="_blank">
          LinkedIn
        </a>
      </li>
    </ul>
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
