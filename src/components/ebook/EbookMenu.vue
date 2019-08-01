<template>
  <div>
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        v-show="menuVisible"
        :class="{'hide-box-shadow':!menuVisible || settingVisible>= 0}"
      >
        <div class="icon-wrapper">
          <span
            class="icon-menu"
            @click="showSetting(3)"
          ></span>
        </div>
        <div class="icon-wrapper">
          <span
            class="icon-progress"
            @click="showSetting(2)"
          ></span>
        </div>
        <div class="icon-wrapper">
          <span
            class="icon-bright"
            @click="showSetting(1)"
          ></span>
        </div>
        <div class="icon-wrapper">
          <span
            class="icon-A"
            @click="showSetting(0)"
          ></span>
        </div>
      </div>
    </transition>
    <ebook-setting-themes></ebook-setting-themes>
    <ebook-setting-font></ebook-setting-font>
    <ebook-font-family-popup></ebook-font-family-popup>
  </div>
</template>

<script>
import { ebookMixins } from '../../utils/mixins';
import EbookSettingFont from "../../components/ebook/EbookSettingFont"
import EbookFontFamilyPopup from "../../components/ebook/EbookFontFamilyPopup"
import EbookSettingThemes from "../../components/ebook/EbookSettingThemes"
export default {
  mixins: [ebookMixins],
  components: {
    EbookSettingFont, EbookFontFamilyPopup,EbookSettingThemes
  },
  methods: {
    showSetting (key) {
      if (this.settingVisible === key) {
        this.setSettingVisible(-1)
      } else {
        this.setSettingVisible(key)
      }
    }
  },

}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin.scss";

.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 102;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(22);
  &.hide-box-shadow {
    box-shadow: none;
  }
  .icon-wrapper {
    flex: 1;
    @include center;
    .icon-progress {
      font-size: px2rem(28);
    }
    .icon-bright {
      font-size: px2rem(24);
    }
  }
}
</style>