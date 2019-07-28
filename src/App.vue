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
  
}
</script>
<style lang="scss"></style>
