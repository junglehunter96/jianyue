<template>
  <div>
    <div id="reader"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
global.ePub = Epub;
import { mapActions,mapGetters } from 'vuex'
export default {
  methods: {
    ...mapGetters(['fileName']),
    ...mapActions(['setFileName']),
    init_epub() {
      let url = `http://192.168.2.76:8081/epub/${this.fileName()}.epub`;
      this.book = new Epub(url);
      this.rendition = this.book.renderTo('reader',{
        width:innerWidth,
        height:innerHeight,
        method:'default'
      })
      this.rendition.display()
    }
  },
  mounted () {
    this.setFileName(this.$route.params.fileName.split('|').join('/')).then(()=>{
      this.init_epub();
    })
  },
}
</script>

<style lang="scss" scoped>
</style>