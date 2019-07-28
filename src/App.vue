<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
document.addEventListener('DOMContentLoaded',()=>{
  const HTML = document.querySelector('html');
  let fontSize = window.innerWidth / 10 ;
  fontSize = fontSize > 50 ? 50 : fontSize;
  HTML.style.fontSize = fontSize;
})
export default {
  name: 'app'
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden
}
</style>
