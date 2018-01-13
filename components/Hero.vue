<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        conteúdo do Hero Maroto
      </div>
    </div>
  </section>
</template>

<style>
  .hero {
    background: url("~/assets/img/background.png");
    background-size: cover;
  }

  .hero-content {
    background: #fff url("~/assets/img/browser.png") no-repeat 50% 0;
    padding-top: 3.5rem;
    padding-left: 1rem;
    background-size: 100%;
    color: #d3d3d3;
    margin: 3rem auto;
    border-radius: 8px;
    height: 19rem;
    width: 90%;
  }
  @media screen and (min-width: 734px) {
    .hero-content {
      padding-top: 5rem;  
    }
  }
</style>
