<template>
  <div class="App-blog">
    <section class="header-wrapper shaddow">
      <div class="container">
        <header class="header">
          <Logo />
          <Navigation />
        </header>
      </div>
    </section>
    <Hero />
    <section class="content">
      <nuxt />
    </section>
    <FooterLayout />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #f1f1f1;
}

.App-blog {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}

.header-wrapper {
  background: #fff;
}

.header {
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  font-family: 'Source Sans Pro', 'Arial';
  font-size: 16px;
  font-weight: 600;
  color: #756c83;
  text-decoration: none;
  transition: all .3s linear;
}

a:hover {
  color: #f38181;
  text-decoration: underline;
}

.container {
  margin-left: 1.12rem;
  margin-right: 1.12rem;
}

.shaddow {
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}

@media screen and (min-width: 768px) {
  .container {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 1012px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>


<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'
import Hero from '~/components/Hero.vue'
import FooterLayout from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    Navigation,
    Hero,
    FooterLayout
  }
}
</script>
