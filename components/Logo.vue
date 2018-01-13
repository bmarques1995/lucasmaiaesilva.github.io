<template>
  <span class="logo">
    <img class="logo-image" src="~/assets/img/me.svg" />
    <nuxt-link to="/">lucas maia</nuxt-link>
  </span>
</template>

<style>
  .logo {
    display: flex;
    align-items: center;
  }
  .logo-image {
    height: 3vw;
    width: 3vw;
    background: rgb(136, 0, 0);
    border-radius: 50%;
  }
  .logo a {
    width: 10rem;
    text-decoration: none;
    margin-left: 1rem;
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
    text-transform: capitalize;
  }
</style>
