<template>
  <div
    id="pageBody"
    :style="`color:hsl(${textColor.h},${textColor.s}%,${textColor.l}%)`"
  >
    <Header0>
      <template #logo>
        <logo></logo>
      </template>
      <template #numberBlock>
        <h3 id="numberWeightSetter">
          <a
            id="topPhone"
            class="phoneNumber"
            :style="`background:hsl(${accent.h},${accent.s}%,${
              accent.l
            }%); color:hsl(${textColor.h},${textColor.s}%,${
              accent.l > 50 ? textColor.l : 100
            }%)`"
            :href="`tel:${content.phone}`"
          >
            Call Us: {{ content.phone }}
          </a>
        </h3>
      </template>
    </Header0>
    <div class="outerWrapper">
      <article
        v-if="content.content1"
        id="content1"
        class="content innerWrapper"
      >
        <h1 :style="`color:hsl(${hsla.h},${hsla.s}%,${hsla.l}%)`">
          {{ noWidow(content.content1.title) }}
        </h1>
        <p
          v-for="(text, index) in content.content1.contentText"
          :key="`cont1${index}`"
        >
          {{ noWidow(text.text) }}
        </p>
      </article>
      <Hero v-if="content.hero.url">
        <template #hero>
          <img :src="getStrapiMedia(content.hero.url)" alt="heroImage" />
        </template>
      </Hero>

      <article
        v-if="content.form"
        id="formOuter"
        class="innerWrapper"
        :style="`background:hsl(${hsla.h},${hsla.s}%,${hsla.l}%)`"
      >
        <form-controller :theme="$store.state.theme.light">
          <h1
            id="formTopText"
            :style="`color:hsl(${textColor.h},${textColor.s}%,${
              hsla.l > 50 ? textColor.l : 100
            }%)`"
          >
            {{ noWidow(content.form.title) }}
          </h1>
          <div
            id="fomTextHolder"
            :style="`color:hsl(${textColor.h},${textColor.s}%,${
              hsla.l > 50 ? textColor.l : 100
            }%)`"
          >
            <p id="formText">
              {{ noWidow(content.form.text) }}
            </p>
          </div>
        </form-controller>
        <p
          :style="`color:hsl(${textColor.h},${textColor.s}%,${
            hsla.l > 50 ? textColor.l : 100
          }%)`"
        >
          100% Privacy Guaranteed. I consent to any and all communication sent
          to me via phone call, text message, or email.
        </p>
      </article>

      <article
        v-if="content.content2"
        id="content2"
        class="content innerWrapper"
      >
        <h1 :style="`color:hsl(${hsla.h},${hsla.s}%,${hsla.l}%)`">
          {{ noWidow(content.content2.title) }}
        </h1>
        <p
          v-for="(text, index) in content.content2.contentText"
          :key="`cont2${index}`"
        >
          {{ noWidow(text.text) }}
        </p>
      </article>
      <footer>
        <Cta>
          <template #cta>
            <h3
              :style="`color:hsl(${textColor.h},${textColor.s}%,${
                hsla.l > 50 ? textColor.l : 100
              }%)`"
            >
              {{ content.cta }}
            </h3>
          </template>
          <template #call>
            <h3
              :style="`color:hsl(${textColor.h},${textColor.s}%,${
                hsla.l > 50 ? textColor.l : 100
              }%)`"
            >
              Call Us Today:
              <a
                id="botPhone"
                class="phoneNumber"
                :href="`tel:${content.phone}`"
                :style="`color:hsl(${accent.h},${accent.s}%,${accent.l}%)`"
              >
                {{ content.phone }}
              </a>
            </h3>
          </template>
        </Cta>
        <CopyRight
          :style="`background:hsl(${accent.h},${accent.s}%,${accent.l}%)`"
        >
          <p>
            Copyright 2020 © Hoglund Law - Hoglund & Mrozik, P.L.L.C. -
            Bankruptcy & Social Security Disability
          </p>
        </CopyRight>
      </footer>
    </div>
  </div>
</template>

<script>
import Header0 from '~/components/Header0'
import Hero from '~/components/Hero'
import Cta from '~/components/Cta'
import CopyRight from '~/components/CopyRight'
import { getStrapiMedia } from '~/util/media'
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Header0,
    Hero,
    Cta,
    CopyRight,
    Logo,
  },
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
  created() {
    this.content = this.page
  },
  mounted() {
    console.log(this.page)
  },
  methods: {
    getStrapiMedia,
    noWidow(text) {
      const lastWord = text.slice(text.lastIndexOf(' ') + 1)
      const index = text.lastIndexOf(' ')
      text = text.substring(0, index)
      return `${text}\xA0${lastWord}`
    },
  },
}
</script>
<style lang="scss">
.outerWrapper {
  display: grid;
  justify-items: center;
  row-gap: 2rem;
}
.innerWrapper {
  width: 60%;
  @media (max-width: 1080px) {
    width: 95%;
  }
}
.logoHolder {
  max-width: 400px;
  width: 40%;
}
#numberWeightSetter {
  margin: 0;
}
.phoneNumber {
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  &:active {
    transition: 0.01s !important;
    filter: drop-shadow(0 0 1px black) !important;
  }
  &:hover {
    filter: drop-shadow(0 0 5px black);
  }
}
#topPhone {
  border-radius: 30px;
  padding: 0.5rem 2rem 0.5rem 2rem;
  box-shadow: 0 0 5px 3px black;
  @media (max-width: 1080px) {
    font-size: clamp(1rem, 4 * 1vw / 2, 2.5rem);
    padding: 0.5rem;
  }
}
#formOuter {
  padding: 1rem 2rem 1rem 2rem;
  box-sizing: border-box;
  .fieldText {
    font-size: 1rem;
  }
  #formTextHolder {
    display: grid;
    justify-items: center;
  }
  #formText {
    text-align: left;
    font-size: 1.5rem;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }
}
#content1 {
  padding: 100px 0 0 0;
}
footer {
  width: 100%;
  margin: 4vw 0 0 0;
}
$textMargin: clamp(0.3em, 1vw / 2.7, 0.5em);
body {
  margin: 0;
  font-family: sans-serif;
}
h1 {
  font-size: clamp(2rem, 4 * 2vw / 2, 3.3rem);
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
a {
  margin: $textMargin 0 $textMargin 0;
  font-size: clamp(1rem, 4 * 1vw / 2, 1.7rem);
  font-weight: 500;
}
em {
  font-style: italic;
}
</style>
