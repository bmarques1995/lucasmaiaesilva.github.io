<template>
  <section class="card">
    <header>
      <h2 class="card-name">
        {{ post.title }}
      </h2>
    </header>
    <div class="card-image">
      <img :src="post.image.url" :alt="post.image.alt" />
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
    margin: 2rem 0;
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
</style>

<script>
export default {
  props: ['post']
}
</script>