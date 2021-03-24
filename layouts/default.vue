<template>
  <div>
    <Nuxt />
    <div id="pageBody">
      <Header0>
        <template #logo> </template>
        <template #numberBlock> </template>
      </Header0>
      <article id="content1" class="content">
        <div class="innerWrapper"></div>
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
  </div>
</template>

<script>
import Header0 from '~/components/Header0'
import Hero from '~/components/Hero'
import Cta from '~/components/Cta'
import CoppyRight from '~/components/CoppyRight'
import { getStrapiMedia } from '~/util/media'
export default {
  components: {
    Header0,
    Hero,
    Cta,
    CoppyRight,
  },
  computed: {
    content() {
      return this.$store.state.content
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>

<style lang="scss">
$textMargin: clamp(0.3em, 1vw / 2.7, 0.5em);
body {
  margin: 0;
  font-family: sans-serif;
}
h1 {
  font-size: clamp(2rem, 4 * 2vw / 2, 5rem);
  font-weight: 600;
  margin: $textMargin 0 $textMargin 0;
}
h2 {
  font-size: clamp(1.4rem, 4 * 2vw / 2, 2.6rem);
  font-weight: 600;
  margin: $textMargin 0 $textMargin 0;
}
h3 {
  font-size: clamp(1.2rem, 4 * 1vw / 2, 2.5rem);
  margin: $textMargin 0 $textMargin 0;
  font-weight: 600;
}
h4 {
  font-size: clamp(1.1rem, 4 * 1vw / 2, 2rem);
  margin: $textMargin 0 $textMargin 0;
  font-weight: 600;
}
h5 {
  font-size: clamp(0.9rem, 4 * 1vw / 2, 1.3rem);
  margin: $textMargin 0 $textMargin 0;
  font-weight: 600;
}
p,
li,
button,
label,
textarea,
a {
  margin: $textMargin 0 $textMargin 0;
  font-size: clamp(1rem, 4 * 1vw / 2, 1.3rem);
  font-weight: 500;
}
em {
  font-style: italic;
}
</style>
