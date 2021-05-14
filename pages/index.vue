<template>
  <div class="container">
    <h1>hello there</h1>
    <div>
      <div v-for="(page, index) in pages" :key="index">
        <NuxtLink :to="`${page.name.toLowerCase()}`">{{ page.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      pages: [],
    }
  },
  async mounted() {
    try {
      if (this.$route.query.test) {
        this.pages = await this.$strapi.find('Pages')
        return this.$strapi.find('Pages').then((data) => {})
      } else {
        window.location.href =
          'https://hoglundlaw.com/?utm_source=maildrip&medium=webapp'
      }
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
