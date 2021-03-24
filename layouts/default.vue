<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#content1 {
  padding: 150px 0 0 0;
}
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
