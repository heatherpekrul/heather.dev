<script>
import { computed } from "vue";

export default {
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
    projects: {
      type: [Array, Boolean],
    },
  },
  setup(props) {
    const formatDate = (timestamp) => {
      const options = {
          month: 'long',
          year: 'numeric',
      };
      return new Intl.DateTimeFormat('en-US', options).format(timestamp);
    };

    const endDateFormatted = computed(() => {
        return props.endDate ? formatDate(props.endDate) : 'Present';
      });

    const startDateFormatted = computed(() => {
        return formatDate(props.startDate);
    });

    return {
      endDateFormatted,
      startDateFormatted
    };
  }
};
</script>

<template>
  <div class="employer">
    <h2 class="employer__name">
      <a :href="this.url" rel="nofollow">
        {{ this.name }}
      </a>
      - {{ this.title }}
    </h2>

    <div class="dates">
      {{ this.startDateFormatted }} - {{ this.endDateFormatted }}
    </div>

    <slot />

    <h3>
      Skills &amp; Languages
    </h3>
    <ul class="skills">
      <li v-for="(tag, index) in this.tags" :key="index">
        {{ tag }}
      </li>
    </ul>

    <!--<template v-if="this.projects">
      <h3>
        Featured Projects
      </h3>
      <ul class="projects">
        <li
          v-for="(project, index) in this.projects"
          :key="index"
        >
          <a
            :href="project.url"
          >
            <span>
              {{ project.title }}
            </span>
          </a>
        </li>
      </ul>
    </template>-->
  </div>
</template>

<style scoped lang="scss">
.employer {
  &:not(:last-of-type) {
    margin-bottom: 3rem;
    border-bottom: 1px solid rgba(#fff, 0.25);
    padding-bottom: 3rem;
  }

  &__name {
    a {
      @include settings.line-hover();
    }
  }
}

.dates {
  text-transform: uppercase;
  font-size: 0.85rem;
}

.skills {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;
  font-size: 0.85rem;
  
  li {
    display: inline-block;
    margin: 0;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(settings.$color-saffron, 0.5);
  }
}
</style>
