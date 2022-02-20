<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style lang="scss">
@use 'normalize.css/normalize.css';

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background: settings.$color-onyx;
  color: #fff;
  font-size: calc(settings.$font-size-base * 0.85);
  line-height: 2;

  @media (min-width: settings.$breakpoint-sm) {
    font-size: settings.$font-size-base;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
    @include settings.font-accent();
}

a {
  color: settings.$color-mint;
  text-decoration: none;
  @include settings.font-primary-weight-regular();
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

#app {
  @include settings.font-primary();
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
