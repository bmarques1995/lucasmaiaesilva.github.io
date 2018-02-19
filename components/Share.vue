<template>
  <section class="share">
    <div class="share-title">Compartilhe esse post :)</div>
    <div class="share-icons">
      <a aria-label="Compartilhe no Twitter" :href="twitterUrl" onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;" title="Compartilhe no Twitter">
        <img src="/icons/twitter-icon.png" alt="compartilhe no twitter">
      </a>
      
      <a aria-label="Compartilhe no Facebook" :href="facebookUrl" onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;" title="Compartilhe no Facebook">
        <img src="/icons/facebook-icon.png" alt="compartilhe no facebook">
      </a>
      
      <a aria-label="Compartilhe no Google Plus" :href="gPlusUrl" onclick="window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;" title="Compartilhe no Google+">
        <img src="/icons/gplus-icon.png" alt="compartilhe no google plus">
      </a>
    </div>
  </section>
</template>

<style>
  .share {
    font-weight: bold;
  }
  .share-title {
    margin: 2rem 0;
    font-size: 2rem;
    text-align: center;
  }
  .share-icons {
    display: flex;
    justify-content: center;
  }

  .share-icons a {
    margin: 0 .5rem;
  }

  @media screen and (min-width: 768px) {
    .share {
      display: flex;
    }
    .share-title {
      margin: 0;
      margin-right: 3rem;
    }
  }
</style>

<script>
export default {
  props: ['url'],
  data: function () {
    return {
      twitterUrl: `https://twitter.com/intent/tweet?text=&quot;&quot;%20${this.url}%20via%20@lucasmaiaesilva&amp;hashtags=`,
      facebookUrl: `https://www.facebook.com/sharer/sharer.php?u=${this.url}`,
      gPlusUrl: `https://plus.google.com/share?url=${this.url}`
    }
  }
}
</script>
