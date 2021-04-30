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
      this.pages = await this.$strapi.find('Pages')
      return this.$strapi.find('Pages').then((data) => {})
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
