<template>
  <span class="logo">
    <img class="logo-image" src="~/assets/img/eu.png" />
    <nuxt-link to="/">lucas maia</nuxt-link>
  </span>
</template>

<style>
  .logo {
    display: flex;
    align-items: center;
  }
  .logo-image {
    max-height: 3rem;
  }
  .logo a {
    text-decoration: none;
    margin-left: 1rem;
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
    text-transform: capitalize;
  }
</style>
