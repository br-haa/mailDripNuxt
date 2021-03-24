<template>
  <div>hi</div>
</template>

<script>
export default {
  async mounted() {
    this.$store.dispatch(
      'content/set',
      await this.$strapi.find('pages', {
        name: this.$route.params.slug,
      })
    )
  },
}
</script>
