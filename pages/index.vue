<template>
  <section class="cards-posts container">
    <PostThumb v-for="post in posts" :post="post" />
  </section>
</template>

<style>
.cards-posts {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

@media screen and (min-width: 734px) {
  .cards-posts {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<script>
import PostThumb from '~/components/PostThumb.vue'
import { posts } from '~/assets/posts.json'

export default {
  components: {
    PostThumb
  },
  data: () => ({
    posts
  })
}
</script>
