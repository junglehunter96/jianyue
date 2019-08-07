// 对vuex和通用方法和参数进行统一混入

import { mapGetters, mapActions } from "vuex";
import { themeList } from "./book";
import { addCss, removeAllCss } from "./utils";
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
    themeList() {
      return themeList(this);
    }
  },
  methods: {
    ...mapActions([
      "setFileName",
      "setMenuVisible",
      "setSettingVisible",
      "setDefaultFontSize",
      "setDefaultFontFamily",
      "setFontFamilyVisible",
      "setDefaultTheme",
      "setBookAvailable",
      "setProgress",
      "setSection",
      "setIsPaginating",
      "setCurrentBook",
      "setNavigation",
      "setCover",
      "setMetadata",
      "setPaginate",
      "setPagelist",
      "setOffsetY",
      "setIsBookmark"
    ]),
    // 初始化全局样式
    init_GlobalStyle() {
      removeAllCss();
      switch (this.defaultTheme) {
        case "Default":
          addCss(
            `${process.env.VUE_APP_RES_URL}/book/res/theme/theme_default.css`
          );
          break;
        case "Eye":
          addCss(`${process.env.VUE_APP_RES_URL}/book/res/theme/theme_eye.css`);
          break;
        case "Gold":
          addCss(
            `${process.env.VUE_APP_RES_URL}/book/res/theme/theme_gold.css`
          );
          break;
        case "Night":
          addCss(
            `${process.env.VUE_APP_RES_URL}/book/res/theme/theme_night.css`
          );
          break;
        default:
          addCss(
            `${process.env.VUE_APP_RES_URL}/book/res/theme/theme_default.css`
          );
          break;
      }
    },
    refreshLocation() {
      const currentLocation = this.currentBook.rendition.currentLocation();
      if (
        currentLocation &&
        currentLocation.start &&
        currentLocation.start.cfi
      ) {
        const startCfi = currentLocation.start.cfi;
        const progress = this.currentBook.locations.percentageFromCfi(startCfi);
        this.setProgress(Math.floor(progress * 100));
        this.$storage.saveLocation(this.fileName, startCfi);
        this.setSection(currentLocation.start.index);
      }
    },
    display(target, cb) {
      if (target) {
        this.currentBook.rendition.display(target).then(() => {
          this.refreshLocation();
          if (cb) cb();
        });
      } else {
        this.currentBook.rendition.display().then(() => {
          this.refreshLocation();
          if (cb) cb();
        });
      }
    },
    // 点击触发标题栏和菜单栏
    toggleTitleAndMenu() {
      this.setMenuVisible(!this.menuVisible);
      this.setFontFamilyVisible(false);
      if (this.menuVisible) {
        this.setSettingVisible(-1);
      }
    },
    //获取已读分钟
    getReadTimeByMinute() {
      let readTime = this.$storage.getReadTime(this.fileName);
      if (!readTime) {
        return 1;
      } else {
        return Math.ceil(readTime / 60);
      }
    },
    // 获取已读时间
    getReadTimeText() {
      return this.$t("book.haveRead").replace("$1", this.getReadTimeByMinute());
    }
  }
};
export { ebookMixins };
