<template>
  <article class="post container">
    <div class="post-content" v-html="postContent"></div>
  </article>
</template>

<style>
.post {
  font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
  line-height: 1.62;
  color: #444;
  -webkit-font-smoothing: antialiased;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  margin-bottom: 5rem;
}

.post-content {
  margin: 1rem 0;
  padding: 1rem;
}

.post-content h1 {
  margin: 2rem 0;
  font-size: 1.6rem;
}

.post p {
  margin-bottom: 3rem;
  font-size: 1.15rem;
}

@media screen and (min-width: 734px) {
  .post-content {
    padding: 2rem;
  }
  .post-content h1 {
    font-size: 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .post-content {
    padding: 2rem 4rem;
  }
}
</style>

<script type="text/babel">
export default {
  computed: {
    // post () {
    //   return this.$store.state.post
    // },
    postContent () {
      // let post = this.$store.state.post
      return require(`~/assets/posts/2015-10-12-usando-markdown.md`)
    }
  },
  asyncData ({ params }) {
    return { post: JSON.stringify(params) }
  }
}

</script>
