<template>
  <section class="card">
    <header>
      <h2 class="card-name">
        <nuxt-link class="card-title" :to="link">{{ post.title }}</nuxt-link>
      </h2>
    </header>
    <div class="card-image">
      <nuxt-link class="card-title" :to="link">
        <img :src="img" :alt="post.image.alt" />
      </nuxt-link>
    </div>
    <footer class="card-info">
      <span>{{ post.date }}</span>
    </footer>
  </section>
</template>

<style>
  .card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    padding: 10px;
    margin: 2rem auto;
    max-width: 400px;
  }

  .card-title {
    color: #444;
    font-size: 1.3rem;
  }

  .card-name {
    text-align: center;
    color: #333;
  }

  .card img {
    width: 100%;
    border-top: 1px solid #d7d7d7;
    margin-top: 1rem;
    padding-top: 1rem;    
  }

  .card-info {
    display: flex;
    justify-content: flex-end;
    font-size: .8rem;
    color: #aaa;
    padding: .7rem 0;
  }

  @media screen and (min-width: 734px) {
    .card {
      display: flex;
      flex-direction: column;
    }
    .card header {
      flex: 1;
      display: flex;
      align-items: center;
    }
    .card-name {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (min-width: 1024px) {
    .card {
      margin: 1rem 1%;
      width: 31.3333%;
    }
  }
</style>

<script>
export default {
  props: ['post'],
  data: function () {
    const image = require(`~/assets/img/thumbs/${this.post.image.url}`)
    return {
      link: `/posts/${this.post.slug}`,
      img: image
    }
  }
}
</script>
