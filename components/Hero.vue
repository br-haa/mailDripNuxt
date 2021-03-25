<template>
  <div id="hero" class="innerWrapper">
    <div id="heroImageHolder">
      <slot name="hero" alt="hero image" />
    </div>
    <div class="innerWrapper"></div>
  </div>
</template>
<style lang="scss" scoped>
#heroImageHolder {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  img {
    object-fit: cover;
    width: 100%;
    height: 50vh;
  }
}
</style>
