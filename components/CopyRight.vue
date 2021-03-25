<template>
  <div
    id="copyRight"
    :style="`background:hsl(${textColor.h},${textColor.s}%,${textColor.l}%)`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CopyRight',
  computed: {
    hsla() {
      const { h, s, l, a } = this.$store.state.theme.light.hsla
      return { h, s, l, a }
    },
    accent() {
      const { h, s, l, a } = this.$store.state.theme.light.accent
      return { h, s, l, a }
    },
    textColor() {
      const { h, s, l, a } = this.$store.state.theme.light.textColor
      return { h, s, l, a }
    },
  },
}
</script>

<style lang="scss" scoped>
#copyRight {
  width: 100%;
  text-align: center;
  padding: 0.5rem 0 0.5rem 0;
}
p {
  font-size: 1rem;
  color: white;
}
</style>
