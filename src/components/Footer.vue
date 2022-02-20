<script setup>

</script>

<template>
  <footer>
      <nav aria-label="Footer Navigation">
          <ul>
              <li>
                  <a href="https://www.linkedin.com/in/heatherpekrul/">
                      LinkedIn
                  </a>
              </li>
              <li>
                  <a href="https://github.com/heatherpekrul">
                      Github
                  </a>
              </li>
          </ul>
      </nav>

      <div class="colophon">
          &copy; Copyright 2022 Heather Pekrul. All rights reserved.
      </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
    text-align: center;
    padding: 3rem;

    a {
        @include settings.line-hover();
    }
}

nav {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: inline-block;

            a {
                display: block;
                padding: 0.5em 1em;
            }
        }
    }
}

.colophon {
    text-transform: uppercase;
    font-size: 0.85em;
    margin-top: 3rem;
}
</style>
