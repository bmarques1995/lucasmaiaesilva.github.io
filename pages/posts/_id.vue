<template>
  <article class="post container">
    <div class="post-content">
      <h1>Novo Post de Exemplo</h1>
      <p>When building React applications, it's very common to see the size of the app grow largely due to the number of dependencies in use. This happens when a section of the app (or route) might import a large number of components that are not necessary when it first loads. This can reduce the initial load time of the app.</p>
      <p>So how do we approach this? How do we make sure that the app only loads what is needed thereby avoiding bloat in the code?</p>
      <strong>{{ post }}</strong>
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

<script>
export default {
  asyncData ({ params }) {
    return { post: JSON.stringify(params) }
  }
}
</script>