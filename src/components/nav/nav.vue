<template>
  <nav class="nav">
    <h1 class="nav__title">
      heather.dev
    </h1>

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/resume">Resume</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
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
@import '@/assets/scss';
@import 'nav';
</style>
