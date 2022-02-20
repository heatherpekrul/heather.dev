<script setup>

</script>

<template>
  <header>
      <router-link :to="{ name: 'HomeView' }" class="logo">
          Heather Pekrul
      </router-link>

      <nav aria-label="Main Navigation">
          <ul>
              <li>
                  <router-link :to="{ name: 'AboutView' }">
                      About
                  </router-link>
              </li>
              <li>
                  <router-link :to="{ name: 'WorkView' }">
                      Work
                  </router-link>
              </li>
              <li>
                  <router-link :to="{ name: 'ContactView' }">
                      Contact
                  </router-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<style scoped lang="scss">
header {
    padding: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    a {
        padding: 0.5rem 1rem;
        box-shadow: none;
        transition: color 0.5s, background-color 0.5s, border-color 0.5s, box-shadow 1s;

        @media (min-width: 480px) {
            padding: 1rem 2rem;     
        }

        &.logo {
            padding-left: 0;
            padding-right: 0;
        }

        &:hover,
        &:active,
        &:focus {
            color: #fff;
            outline: none;
        }
    }

    nav {
        ul {
            display: flex;
            flex-flow: row wrap;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                margin: 0;
                padding: 0;

                a {
                    color: #fff;
                    border: 1px solid rgba(settings.$color-mint, 0.25);
                    border-radius: 2rem;
                    font-size: 0.75rem;

                    &:hover,
                    &:active,
                    &:focus {
                        background: settings.$color-mint;
                        color: settings.$color-onyx;
                        border-color: settings.$color-mint;
                    }

                    &:focus {
                        box-shadow: 0 0 1em 1em rgba(settings.$color-mint, 0.15);
                    }
                }
            }
        }
    }
}

a {
    text-transform: uppercase;
    @include settings.font-primary-weight-bold();
    display: inline-block;
}
</style>
