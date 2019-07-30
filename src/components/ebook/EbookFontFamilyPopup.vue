<template>
  <transition name="popup-slide-up">
    <div
      class="ebook-popup-list"
      v-show="fontFamilyVisible"
    >
      <div class="ebook-popup-title">
        <div
          class="ebook-popup-title-icon"
          @click="hide"
        >
          <span class="icon-down2"></span>
        </div>
        <div class="ebook-popup-title-text">选择字体</div>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div
          class="ebook-popup-item"
          v-for="(item,index) of fontFamily"
          :key="index"
          @click="setFontFamily(item)"
        >
          <div
            class="ebook-popup-item-text"
            :class="{'selected':isSelected(item)}"
          >{{item.font}}</div>
          <div class="ebook-popup-item-check" v-show="defaultFontFamily === item.font">
            <span class="icon-check"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixins } from '../../utils/mixins';
import { fontFamily } from '../../utils/book'
export default {
  mixins: [ebookMixins],
  data () {
    return {
      fontFamily,
    }
  },
  methods: {
    hide () {
      this.setFontFamilyVisible(false)
    },
    isSelected (item) {
      return this.defaultFontFamily === item.font
    },
    setFontFamily(item) {
      this.setDefaultFontFamily(item.font);
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin.scss";
@import "../../assets/styles/transition.scss";
.ebook-popup-list {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, 0.1);
  z-index: 300;
  background: white;
  .ebook-popup-title {
    position: relative;
    padding: px2rem(15);
    box-sizing: border-box;
    border-bottom: px2rem(1) solid #b8b9bb;
    text-align: center;
    @include center;
    .ebook-popup-title-icon {
      position: absolute;
      left: px2rem(15);
      top: 0;
      height: 100%;
      font-size: px2rem(16);
      font-weight: bold;
      @include center;
    }
    .ebook-popup-title-text {
      display: block;
      font-size: px2rem(14);
      font-weight: bold;
    }
  }
  .ebook-popup-list-wrapper {
    .ebook-popup-item {
      display:flex;
      padding: px2rem(16);
      height: px2rem(47);
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
      .ebook-popup-item-text {
        flex:1;
        font-size: px2rem(14);
        text-align: left;
        &.selected {
          color: #346cb9;
        }
      }
      .ebook-popup-item-check {
        flex:1;
        text-align:right;
        font-size: px2rem(14);
        font-weight: bold;
      }
    }
  }
}
</style>