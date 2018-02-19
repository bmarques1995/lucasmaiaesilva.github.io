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
    width: 2.5rem;
    height: 2.5rem;
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

  @media screen and (min-width: 734px) {
    .logo-image {
      height: 3vw;
      width: 3vw;
    }
  }
</style>
