<template>
  <div id="pageBody">
    <Header0>
      <template #logo> </template>
      <template #numberBlock>
        <div>
          {{ content.phone }}
        </div>
      </template>
    </Header0>
    <article id="content1" class="content">
      <div class="innerWrapper">
        <h1>{{ content.content1.title }}</h1>
        <p>{{ content.content1.body }}</p>
      </div>
    </article>
    <Hero>
      <template #hero>
        <img
          v-if="content.hero"
          :src="getStrapiMedia(content.hero[0].url)"
          alt="heroImage"
        />
      </template>
    </Hero>
    <Form> </Form>
    <article id="content2" class="content">
      <div class="innerWarpper"></div>
    </article>
    <Cta></Cta>
    <CoppyRight></CoppyRight>
  </div>
</template>

<script>
import Header0 from '~/components/Header0'
import Hero from '~/components/Hero'
import Cta from '~/components/Cta'
import CoppyRight from '~/components/CoppyRight'
import { getStrapiMedia } from '~/util/media'
export default {
  async asyncData({ $strapi, params }) {
    const matchingPage = await $strapi.find('pages', {
      name: params.slug,
    })
    return {
      page: matchingPage[0],
    }
  },
  data() {
    return {
      content: {},
    }
  },

  components: {
    Header0,
    Hero,
    Cta,
    CoppyRight,
  },
  methods: {
    getStrapiMedia,
  },
  created() {
    this.content = this.page
  },
}
</script>
