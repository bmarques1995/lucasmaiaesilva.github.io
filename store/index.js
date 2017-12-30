import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      post: 'empty test'
    },
    mutations: {
      setPost   (state, { post }) {
        state.post = post
      }
    }
  })
}

export default createStore
