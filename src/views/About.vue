<template>
  <div class="about container">
    <h1>About</h1>

    <img src="../assets/images/dog-pals.jpg" alt="Heather and Evey">

    <p>My name is Heather Pekrul and I'm a software engineer. I specialize in web technologies,
      but I've dabbled in others as well. This site is geared towards those endeavors, but my
      other interests are linked on <a href="https://heatherpekrul.com">my personal site</a>.</p>

    <p>I mainly write code in JavaScript these days, which I have grown to love. Admittedly, it
    took me some time to get there, but it was an interesting journey.</p>

    <p>My first forays into tech were in elementary school before my family even had a computer
      in our home. I was fascinated with computers, and luckily enough my elementary school
      offered an "open computer lab" session before school where any student could come early
      before class started to use the computer lab. I have fond memories of playing
      <a href="https://en.wikipedia.org/wiki/The_Oregon_Trail_(1985_video_game)">Oregon Trail</a>
      and <a href="https://en.wikipedia.org/wiki/Munchers#Word_Munchers">Word Munchers</a>.</p>

    <p>In the summer between elementary school and junior high, we got a computer with internet
      access and I spent a lot of time using it to its fullest. I started playing an online game
      called <a href="https://en.wikipedia.org/wiki/Neopets">Neopets</a>, which allows you to create
      an online pet, play games, and create an online page for your pets. Obviously, I quickly
      realized that some people were able to spice up their pages with CSS and I wanted to do the
      same. Unfortunately, I was also exposed to the marquee tag at this time. At least I got it out
      of my system at an early age.</p>

    <p>I recall asking my mom for permission to create a
      <a href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities">GeoCities</a> page at some point
      shortly after figuring out that I really loved creating web pages, and that I could do so with
      fewer restrictions outside of Neopets. It snowballed when I eventually purchased my first
      domain name in 2004 for the cool factor. My birthday money was able to purchase a year of
      shared hosting, and at that point I was exposed to PHP - which was not, as a teacher
      mistakenly overheard me discussing in junior high, a narcotic but a whole new world of dynamic
      web sites.</p>

    <p>In high school I began doing freelance web design and development work in an attempt to save
      up money to pay for college. Eventually, I made my way to
      <a href="https://www.k-state.edu">Kansas State University</a> where I majored in
      <a href="http://www.cs.ksu.edu">Information Systems</a>. At K-State, I learned an immense
      amount about software design, programming languages, networking, and more. I still remember
      some very interesting database design examples invoking memes (hi, Dr. Hsu!) and that "caching
      and locality" was the Hail Mary answer for Dr. Andresen (although writing "Go Huskers" on your
      papers inevitably got you some leeway).</p>

    <p>All wonderful things must come to an end, and as such I graduated in 2011 from K-State and
      went on to the real world where I started writing code professionally. Every day is a learning
      experience just as much as it was in the beginning: but it's something I do because I love it
      and I'm as passionate about it as the day I learned how to add a glitter trail to the mouse
      cursor on my Neopets page.</p>

    <p>My first full-time position after college was writing VB.net. I quickly realized that this
      was not an area which I was passionate about and sought out other opportunities. I was able to
      move on to two other positions at agencies which allowed me to work on many varied projects
      focusing on the web. These opportunities allowed me to learn how to cope in fast-paced and
      intense environments with strict deadlines, varying requirements, and the ever-changing
      landscape that constitutes web development today. I learned a lot during this time.</p>

    <p>The work at agencies is a dual-edged sword: it is exciting to work on so many projects, but
      as a result, you frequently do not get to truly hone and craft individual projects to be their
      best. I eventually made the decision to move on to an opportunity that would give me that
      experience.</p>

    <p>Today, I take pride in continually improving both myself and the projects that I
      work on to benefit our customers and the company associates who use our software. I'm always
      on the lookout for opportunities to take baby steps towards a better experience for the
      developers on my team by creating and enforcing standards, cleaning up code smells, and
      reducing our risk profile for future problems. I view my work and my skills as a continual
      work in progress: nothing is ever perfect, and what was previously the best method might not
      be the best tomorrow. The web changes too quickly for any of us to stay the same.</p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss';

.about {
  @include clearfix();

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
