<template>
  <div>
    <div id="reader"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
global.ePub = Epub;
import { ebookMixins } from '../../utils/mixins';

export default {
  mixins: [ebookMixins],
  methods: {
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
        this.setMenuVisible(false)
      }
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
        this.setMenuVisible(false)
      }
    },
    toggleTitleAndMenu () {
      this.setMenuVisible(!this.menuVisible)
      this.setFontFamilyVisible(false)
      if (this.menuVisible) {
        this.setSettingVisible(-1)
      }
    },
    init_epub () {
      let url = `http://192.168.2.76:8081/epub/${this.fileName}.epub`;
      this.book = new Epub(url);
      this.setCurrentBook(this.book);
      this.rendition = this.book.renderTo('reader', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      });
      this.rendition.display().then(() => {
        let fontSize = this.$storage.getFontSize(this.fileName)
        if (!fontSize) {
          this.$storage.saveFontSize(this.fileName, this.defaultFontSize);
        }else {
          this.rendition.themes.fontSize(fontSize)
          this.setDefaultFontSize(fontSize)
        }
        let font = this.$storage.getFontFamily(this.fileName)
        if (!font) {
          this.$storage.saveFontFamily(this.fileName, this.defaultFontFamily);
        }else {
          this.rendition.themes.font(font)
          this.setDefaultFontFamily(font)
        }
      });
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (time > 300 && offsetX > 40) {
          this.prevPage()
        } else if (time > 300 && offsetX < -40) {
          this.nextPage()
        } else {
          this.toggleTitleAndMenu()
        }
        event.stopPropagation();
        event.preventDefault();
      });
      // 注入epub内嵌样式
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/tangerine.css`),
        ]).then(() => {

        })
      })
    }
  },
  mounted () {
    if (this.$route.params.fileName) {
      let fileName = this.$route.params.fileName.split('|').join('/');
      this.setFileName(fileName).then(() => {
        this.init_epub()
      })
    }


  },
}
</script>

<style lang="scss" scoped>
</style>