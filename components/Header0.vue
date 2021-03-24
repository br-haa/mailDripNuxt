<template>
  <article id="header" :class="{ scroll: !atTop }">
    <div id="headerFlex" class="innerWrapper">
      <slot name="logo"> </slot>
      <slot name="numberBlock"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TopHeader',
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
  height: 100px;
  z-index: 600;
  display: grid;
  box-shadow: 0 0 5px 3px black;
  width: 100%;
  position: fixed;
  transition: 0.3s;
  background: white;
  #headerFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      max-width: 300px;
      @media screen and (max-width: 1080px) {
        width: 40%;
      }
    }
  }
}
.scroll {
  height: 70px !important;
  background: hsla(100, 0%, 100%, 0.7) !important;
  backdrop-filter: blur(5px);
}
</style>
