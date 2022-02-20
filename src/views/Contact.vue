<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
  <section>
    <PageHeader>
        Contact
    </PageHeader>

    <div class="container">
        <p>
            I prefer to be contacted via email at <a href="mailto:heather.pekrul@gmail.com">heather.pekrul@gmail.com</a> or via <a href="https://www.linkedin.com/in/heatherpekrul/">LinkedIn</a>.
        </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
a {
  @include settings.line-hover();
}
</style>
