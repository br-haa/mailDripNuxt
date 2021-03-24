export const state = () => ({})

export const mutations = {
  set(state, content) {
    state = content
  },
}

export const actions = {
  set(context, content) {
    context.commit('set', content)
  },
}
