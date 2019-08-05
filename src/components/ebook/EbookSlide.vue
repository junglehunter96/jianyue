<template>
  <transition class="fade">
    <div
      class="slide-content-wrapper"
      v-show="menuVisible && settingVisible === 3 "
    >
      <transition class="slide-right">
        <div
          class="content"
          v-show="settingVisible === 3"
        >
          <div class="content-page-wrapper">
            <div class="content-page">
              <component :is="settingTabItem ===1 ? content : bookmark "></component>
            </div>
            <div class="content-page-tab">
              <div
                class="content-page-tab-item"
                :class="{'selected' : settingTabItem === 1}"
                @click="changeSettingTabItem(1)"
              >{{$t('book.navigation')}}</div>
              <div
                class="content-page-tab-item"
                :class="{'selected' : settingTabItem === 2}"
                @click="changeSettingTabItem(2)"
              >{{$t('book.bookmark')}}</div>
            </div>
          </div>
        </div>
      </transition>
      <div
        class="content-bg"
        @click="quitMenu"
      ></div>
    </div>
  </transition>
</template>

<script>
import { ebookMixins } from '../../utils/mixins';
import BookContent from './EbookSlideContent';
import BookMark from './EbookSlideBookMark';
export default {
  mixins: [ebookMixins],
  data () {
    return {
      settingTabItem: 1,
      content: BookContent,
      bookmark: BookMark
    }
  },
  methods: {
    changeSettingTabItem (value) {
      this.settingTabItem = value;
    },
    quitMenu (e) {
      this.toggleTitleAndMenu()
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin.scss";
.slide-content-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 300;
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    flex: 0 0 85%;
    height: 100%;
    .content-page-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .content-page {
        flex: 1;
        width: 100%;
        overflow: hidden;
      }
      .content-page-tab {
        flex: 0 0 px2rem(48);
        width: 100%;
        height: px2rem(48);
        display: flex;
        .content-page-tab-item {
          flex: 1;
          @include center;
          font-size: px2rem(12);
        }
      }
    }
  }
  .content-bg {
    flex: 0 0 15%;
    height: 100%;
  }
}
</style>