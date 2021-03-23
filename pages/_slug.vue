<template>
  <div>
    <div v-for="item in page" :key="item.name">
      {{ item.name }}<br />
      {{ item.phone }}<br />
      {{ item.hero[0].url }}<br />
      <img :src="getStrapiMedia(item.hero[0].url)" />
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/media'

export default {
  async asyncData({ $strapi, params }) {
    console.log(params.slug)
    const matchingPage = await $strapi.find('pages', {
      name: params.slug,
    })
    return {
      page: matchingPage,
    }
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
