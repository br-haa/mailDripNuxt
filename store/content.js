export const state = () => ({
  data: {},
})

export const mutations = {
  set(state, content) {
    state.data = content
  },
}

export const actions = {
  set(context, content) {
    context.commit('set', content)
  },
}
