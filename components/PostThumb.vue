<template>
  <section class="card">
    <header>
      <h2 class="card-name">
        <nuxt-link class="card-title" :to="link">{{ post.title }}</nuxt-link></li>
      </h2>
    </header>
    <div class="card-image">
      <nuxt-link class="card-title" :to="link">
        <img :src="post.image.url" :alt="post.image.alt" />
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
    border-bottom: 1px solid #d7d7d7;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    color: #333;
  }

  .card img {
    width: 100%;
  }

  .card-info {
    display: flex;
    justify-content: flex-end;
    font-size: .8rem;
    color: #aaa;
    padding: .7rem 0;
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
    return { link: `/posts/${this.post.slug}` }
  }
}
</script>
