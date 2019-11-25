<template>
  <div class="home container">
    <h1>Hello, I'm Heather.</h1>
    <img src="../assets/images/yosemite-hiking.jpg" alt="Heather hiking in Yosemite">
    <p>I'm a frontend engineer. The internet is my playground. A more complete introduction and
    information about my background can be found on my <a href="/about">about page</a>.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss';

.home {
  @include clearfix();

  p {
    font-size: 1.75rem;
  }

  img {
    box-shadow: 0 0 1em 0 rgba($color-black,0.5);

    @include breakpoint() {
      float: left;
      width: 25em;
      margin-right: 1em;
    }
  }
}
</style>
