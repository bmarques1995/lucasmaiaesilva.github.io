<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/highlightjs.min.css'

import '../assets/css/buttons.css'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Lucas Maia - Blog","meta":[{"charset":"utf-8"},{"httpEquiv":"X-UA-Compatible","content":"IE=edge"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Este blog foi criado, com o intuito de ajudar Devs iniciando sua carreira com Desenvolvimento Web."},{"name":"author","content":"Lucas Maia e Silva"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@lucasmaiaesilva"},{"name":"twitter:title","content":"Lucas Maia - Blog"},{"name":"twitter:description","content":"Este blog foi criado, com o intuito de ajudar Devs iniciando sua carreira com Desenvolvimento Web."},{"property":"fb:admins","content":"1669015710009212"},{"property":"og:url","content":"/"},{"property":"og:title","content":"Lucas Maia - Blog"},{"property":"og:image","content":"/blog-image.png"},{"name":"theme-color","content":"#1d1d1d"}],"link":[{"rel":"shortcut icon","href":"/favicon.ico"},{"rel":"shortcut icon","href":"/icons/favicon.ico","type":"image/x-icon"},{"rel":"apple-touch-icon","href":"/icons/apple-touch-icon.png"},{"rel":"apple-touch-icon","sizes":"57x57","href":"/icons/apple-touch-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"/icons/apple-touch-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"/icons/apple-touch-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"/icons/apple-touch-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"/icons/apple-touch-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"/icons/apple-touch-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"/icons/apple-touch-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"/icons/apple-touch-icon-152x152.png"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

