<template>
  <div>
    <div id="reader"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
global.ePub = Epub;
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapGetters(['fileName']),
    ...mapActions(['setFileName']),
    prevPage () {
      if (this.rendition) {     
        this.rendition.prev()
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    toggleTitleSAndMenu () {

    },
    init_epub () {
      let url = `http://192.168.2.76:8081/epub/${this.fileName()}.epub`;
      this.book = new Epub(url);
      this.rendition = this.book.renderTo('reader', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      });
      this.rendition.display();
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (time > 500 && offsetX > 40) {
          this.prevPage()
        } else if (time > 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.toggleTitleSAndMenu()
        }
        event.stopPropagation();
        event.preventDefault();
      });
    }
  },
  mounted () {
    let fileName = this.$route.params.fileName.split('|').join('/');
    this.setFileName(fileName).then(() => {
      this.init_epub()
    })
  },
}
</script>

<style lang="scss" scoped>
</style>