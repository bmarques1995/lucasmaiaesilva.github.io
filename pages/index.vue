<template>
  <section class="container">
    <PostThumb v-for="post in posts" :post="post" />
  </section>
</template>

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
