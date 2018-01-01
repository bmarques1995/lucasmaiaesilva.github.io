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

.post-content pre {
  display: block;
  overflow-x: auto;
  color: #abb2bf;
  background: #282c34;
  width: 100%;
  padding: 2rem 4rem;
}

.post-content p > code {
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 90%;
}

.post-content pre {
  margin: 3rem 0;
}  

.post p {
  margin-bottom: 3rem;
  font-size: 1.15rem;
}

@media screen and (min-width: 734px) {
  .post-content pre {
    margin: 3rem 0;
  }
  .post-content,
  .post-content pre {
    padding: 2rem;
  }
  .post-content h1 {
    font-size: 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .post-content,
  .post-content pre, {
    padding: 2rem 4rem;
  }
  .post-content pre {
    margin: 3rem 0;
  }
}
</style>

<script type="text/babel">
export default {
  computed: {
    postContent () {
      const { id } = this.$route.params
      return require(`~/assets/posts/${id}.md`)
    }
  }
}

</script>
