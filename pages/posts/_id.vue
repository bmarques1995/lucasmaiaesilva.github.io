<template>
  <article class="post container">
    <div class="post-content">
      <div v-html="postContent" />
      <disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId" />
    </div>
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

.post-content img {
  width: 100%;
}

.post-content pre {
  margin: 3rem 0;
}  

.post p {
  margin-bottom: 3rem;
  font-size: 1.15rem;
}

.post-content a {
  text-decoration: underline;
}

.post-content blockquote {
  background: #f5f5f5;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
}

.post-content blockquote p {
  margin-bottom: 0.03rem
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
  .post-content img {
    width: auto;
    max-width: 100%;
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
import Disqus from 'vue-disqus/VueDisqus.vue'

export default {
  components: {
    Disqus
  },
  computed: {
    postContent () {
      const { id } = this.$route.params
      return require(`~/assets/posts/${id}.md`)
    },
    disqusShortname () {
      return 'bloglucasmaiaesilva'
    },
    disqusId () { // env used to avoid re-use from dev to production
      return `${process.env.NODE_ENV}-${this.disqusShortname}-${this.$route.params.id}`
    }
  },
  watch: {
    '$route.params.id' (curr, old) {
      // disqus does not properly reload just based off the
      // disqusId computed property - we need to manually change it
      // when we know it should update
      this.$refs.disqus.init()
    }
  }
}

</script>
