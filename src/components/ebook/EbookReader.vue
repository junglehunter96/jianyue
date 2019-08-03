<template>
  <div>
    <div id="reader"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
global.ePub = Epub;
import { addCss } from '../../utils/utils'
import { ebookMixins } from '../../utils/mixins';

export default {
  mixins: [ebookMixins],
  methods: {
    // 上一页
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
        this.setMenuVisible(false)
      }
    },
    // 下一页
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
        this.setMenuVisible(false)
      }
    },
    // 点击触发标题栏和菜单栏
    toggleTitleAndMenu () {
      this.setMenuVisible(!this.menuVisible)
      this.setFontFamilyVisible(false)
      if (this.menuVisible) {
        this.setSettingVisible(-1)
      }
    },
    // 初始化字号
    init_fontSize () {
      let fontSize = this.$storage.getFontSize(this.fileName)
      if (!fontSize) {
        this.$storage.saveFontSize(this.fileName, this.defaultFontSize);
      } else {
        this.rendition.themes.fontSize(fontSize)
        this.setDefaultFontSize(fontSize)
      }
    },
    // 初始化字体
    init_fontFamily () {
      let font = this.$storage.getFontFamily(this.fileName)
      if (!font) {
        this.$storage.saveFontFamily(this.fileName, this.defaultFontFamily);
      } else {
        this.rendition.themes.font(font)
        this.setDefaultFontFamily(font)
      }
    },
    // 初始化电子书主题
    init_epubTheme () {
      let defaultTheme = this.$storage.getTheme(this.fileName)
      if (!defaultTheme) {
        defaultTheme = this.themeList[0].name;
        this.$storage.saveTheme(this.fileName, defaultTheme)
      }
      this.setDefaultTheme(defaultTheme)
      this.themeList.forEach(theme => {
        this.rendition.themes.register(theme.name, theme.style);
        this.rendition.themes.select(defaultTheme)
      })
    },
    // 监听电子书翻页手势
    init_Gesture () {
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
    },
    //初始化电子书渲染
    init_rendition () {
      this.rendition = this.book.renderTo('reader', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      });
      this.rendition.display().then(() => {
        this.init_fontSize();
        this.init_fontFamily();
        this.init_epubTheme();
        this.init_GlobalStyle();
        this.init_Gesture();
      });
      // 注入epub内嵌样式
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/book/res/fonts/tangerine.css`),
        ]).then(() => { })
      })
    },
    // 初始化电子书
    init_epub () {
      let url = `${process.env.VUE_APP_RES_URL}/epub/${this.fileName}.epub`;
      this.book = new Epub(url);
      this.setCurrentBook(this.book);
      this.init_rendition();
      this.book.ready.then(() => {
        return this.book.locations.generate(750 * (window.innerWidth / 375) * (this.$storage.getFontSize(this.fileName) / 16))
      }).then(locations => {
        this.book.rendition.display(locations)
        this.setBookAvailable(true)
      })
    },
  },
  mounted () {
    if (this.$route.params.fileName) {
      let fileName = this.$route.params.fileName.split('|').join('/');
      this.setFileName(fileName).then(() => {
        this.init_epub();
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>