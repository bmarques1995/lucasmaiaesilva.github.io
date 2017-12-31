<template>
  <ul class="navigation">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/portfolio">portfolio</nuxt-link></li>
  </ul>
</template>

<style>
.navigation {
  padding: 0;
}

.navigation li {
  list-style-type: none;
  display: inline;
  margin: 0 1rem;
}

.navigation .nuxt-link-exact-active {
  color: #f38181;
  text-decoration: underline;
}
</style>
