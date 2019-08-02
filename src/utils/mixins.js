import { mapGetters, mapActions } from "vuex";
import { themeList } from './book';
import { addCss,removeAllCss } from './utils'
const ebookMixins = {
  computed: {
    ...mapGetters([
      "fileName",
      "menuVisible",
      "settingVisible",
      "defaultFontSize",
      "defaultFontFamily",
      "fontFamilyVisible",
      "defaultTheme",
      "bookAvailable",
      "progress",
      "section",
      "isPaginating",
      "currentBook",
      "navigation",
      "cover",
      "metadata",
      "paginate",
      "pagelist",
      "offsetY",
      "isBookmark"
    ]),
    themeList () {
      return themeList(this)
    }
  },
  methods: {
    ...mapActions([
      "setFileName",
      "setMenuVisible",
      "setSettingVisible",
      "setDefaultFontSize",
      'setDefaultFontFamily',
      'setFontFamilyVisible',
      'setDefaultTheme',
      'setBookAvailable',
      'setProgress',
      'setSection',
      'setIsPaginating',
      'setCurrentBook',
      'setNavigation',
      'setCover',
      'setMetadata',
      'setPaginate',
      'setPagelist',
      'setOffsetY',
      'setIsBookmark'
    ]),
     // 初始化全局样式
     init_GlobalStyle () {
      removeAllCss()
      switch (this.defaultTheme) {
        case 'Default':
          addCss(`${process.env.VUE_APP_RES_URL}/book/res/theme/theme_default.css`)
          break ;
        case 'Eye':   
          addCss(`${process.env.VUE_APP_RES_URL}/book/res/theme/theme_eye.css`)
          break ;
        case 'Gold':
          addCss(`${process.env.VUE_APP_RES_URL}/book/res/theme/theme_gold.css`)
          break ;
        case 'Night':
          addCss(`${process.env.VUE_APP_RES_URL}/book/res/theme/theme_night.css`)
          break ;
        default:
          addCss(`${process.env.VUE_APP_RES_URL}/book/res/theme/theme_default.css`)
          break ;
      }
    },
  }
};
export { ebookMixins };
