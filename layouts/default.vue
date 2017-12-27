<template>
  <div>
    <section class="header-wrapper shaddow">
      <div class="container">
        <header class="header">
          <Logo />
          <Navigation />
        </header>
      </div>
    </section>
    <nuxt/>
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
  background: #f38181;
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
</style>


<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Logo,
    Navigation
  }
}
</script>