<template>
  <article id="header" :class="{ scroll: !atTop }">
    <div
      v-if="atTop"
      id="headerTopBar"
      :style="{ background: `hsl(${color.h},${color.s}%,${color.l}%)` }"
    >
      <p>Over 70+ Years Of Combined Experience</p>
    </div>
    <div id="headerFlex" class="innerWrapper">
      <slot name="logo"> </slot>
      <slot name="numberBlock"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    color: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      atTop: true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkHeader)
  },
  methods: {
    checkHeader() {
      // this.atTop = Math.round(window.scrollY) < this.height;
      const now = Math.round(window.scrollY)
      if (now > this.thn) {
        this.atTop = now <= 100
      } else if (now < this.thn) {
        this.atTop = true
      }
      this.thn = now
    },
  },
}
</script>

<style scoped lang="scss">
#header {
  height: clamp(100px, 8vw, 130px);
  z-index: 600;
  display: grid;
  box-shadow: 0 0 5px 3px black;
  width: 100%;
  position: fixed;
  transition: 0.3s;
  background: white;
  #headerTopBar {
    width: 100%;
    background: black;
    height: 35px;
    text-align: center;
    display: grid;
    p {
      font-size: clamp(1rem, 3vw, 1.3rem);
      color: white;
      place-self: center;
    }
  }
  #headerFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: center;
    @media screen and (max-width: 1080px) {
      column-gap: 1rem;
    }
  }
}
.scroll {
  height: 70px !important;
  background: hsla(100, 0%, 100%, 0.7) !important;
  backdrop-filter: blur(5px);
}
</style>
