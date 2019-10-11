<template>
  <div class="employer">
    <h2>{{ name }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Employer',
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss';
@import 'employer';
</style>
