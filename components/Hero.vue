<template>
  <div class="outerWrapper">
    <div id="heroImageHolder">
      <slot name="hero" alt="hero image" />
    </div>
    <div class="innerWrapper"></div>
  </div>
</template>
<style lang="scss" scoped>
#heroImageHolder {
  width: 100%;
  height: 40vh;
  img {
    object-fit: cover;
  }
}
</style>
