<template>
  <div class="employer">
    <h3>
      <a :href="url" target="_blank">
        {{ name }}
      </a>
    </h3>

    <div class="dates">
      {{ startDateFormatted }} - {{ endDateFormatted }}
    </div>

    <slot />

    <h4>
      Skills &amp; Languages
    </h4>
    <ul class="skills">
      <li v-for="(tag, index) in tags" :key="index">
        {{ tag }}
      </li>
    </ul>
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
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: [Date, Boolean],
      required: true,
    },
  },
  computed: {
    endDateFormatted() {
      return this.endDate ? this.formatDate(this.endDate) : 'Present';
    },
    startDateFormatted() {
      return this.formatDate(this.startDate);
    },
  },
  methods: {
    formatDate(timestamp) {
      const options = {
        month: 'long',
        year: 'numeric',
      };

      return new Intl.DateTimeFormat('en-US', options).format(timestamp);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss';
@import 'employer';
</style>
