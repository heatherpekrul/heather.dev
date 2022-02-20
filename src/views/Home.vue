<script setup>
function reveal() {
  const elementsToReveal = document.querySelectorAll('.reveal');
  const activeClass = 'active';
  const windowHeight = window.innerHeight;
  const elementVisible = 150;
  for (let i = 0; i < elementsToReveal.length; i++) {
    let elementTop = elementsToReveal[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      elementsToReveal[i].classList.add(activeClass);
    } else {
      elementsToReveal[i].classList.remove(activeClass);
    }
  }
}

window.addEventListener('scroll', reveal);
</script>

<template>
  <section class="intro-container hello">
    <h1>
      Hello, I'm Heather.
    </h1>
  </section>

  <section class="intro-container frontend reveal">
    <h1>
      I'm a frontend engineer.
    </h1>
  </section>

  <section class="intro-container playground reveal">
    <h1>
      The internet is my playground.
    </h1>
  </section>

  <section class="intro-container craft reveal">
    <h1>
      The web is my craft.
    </h1>
  </section>
</template>

<style scoped lang="scss">
.intro-container {
  font-size: 1.5rem;
  padding: 3rem;
  min-height: 50vh;
  line-height: 1;
  position: relative;

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    min-height: 75vh;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
    min-height: 85vh;
  }

  h1 {
    z-index: +1;
    position: relative;
  }
}

.reveal {
  opacity: 0;
  transition: 2s all ease;

  h1 {
    transform: translateX(-50vw);
    transition: 2s all ease;
  }

  &.active {
    opacity: 1;

    h1 {
      transform: translateX(0);
    }
  }
}

.hello {
  background: settings.$color-mint;
  color: #000;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('glacier-sm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.3;

    @media(min-width: 480px) {
      background-image: url('glacier-md.jpg');
    }

    @media(min-width: 768px) {
      background-image: url('glacier-lg.jpg');
    }

    @media(min-width: 1024px) {
      background-image: url('glacier-xl.jpg');
    }
  }
}

.frontend {
  background: settings.$color-saffron;
  color: #000;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('js-sm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
    opacity: 0.4;

    @media(min-width: 480px) {
      background-image: url('js-md.jpg');
    }

    @media(min-width: 768px) {
      background-image: url('js-lg.jpg');
    }

    @media(min-width: 1024px) {
      background-image: url('js-xl.jpg');
    }
  }
}

.playground {
  background: settings.$color-orange;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('circuit-sm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.3;

    @media(min-width: 480px) {
      background-image: url('circuit-md.jpg');
    }

    @media(min-width: 768px) {
      background-image: url('circuit-lg.jpg');
    }

    @media(min-width: 1024px) {
      background-image: url('circuit-xl.jpg');
    }
  }
}

.craft {
  background: settings.$color-ruby;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('watercolor-sm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right bottom;
    opacity: 0.3;

    @media(min-width: 480px) {
      background-image: url('watercolor-md.jpg');
    }

    @media(min-width: 768px) {
      background-image: url('watercolor-lg.jpg');
    }

    @media(min-width: 1024px) {
      background-image: url('watercolor-xl.jpg');
    }
  }
}
</style>
