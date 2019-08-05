<template>
  <div class="ebook-slide-contents">
    <div class="slide-contents-search-wrapper">
      <div class="slide-contents-search-input-wrapper">
        <div class="slide-contents-search-icon">
          <span class="icon-search"></span>
        </div>
        <input
          class="slide-contents-search-input"
          type="text"
          @click="showSearchVisible"
          :placeholder="$t('book.searchHint')"
        >
        <div
          class="slide-contents-search-cancel"
          v-show="searchVisible"
          @click="setSearchVisible"
        >{{$t('book.cancel')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ebookMixins } from '../../utils/mixins';
export default {
  mixins: [ebookMixins],
  data () {
    return {
      searchVisible: false
    }
  },
  methods: {
    showSearchVisible () {
      this.searchVisible = true
    },
    setSearchVisible () {
      this.searchVisible = false
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin.scss";

.ebook-slide-contents {
  width: 100%;
  .slide-contents-search-wrapper {
    display: flex;
    width: 100%;
    height: px2rem(36);
    margin: px2rem(20) 0 px2rem(10) 0;
    padding: 0 px2rem(20);
    box-sizing: border-box;
    .slide-contents-search-input-wrapper {
      flex: 1;
      @include center;
      .slide-contents-search-icon {
        flex: 0 0 px2rem(28);
        font-size: px2rem(12);
        @include center;
      }
      .slide-contents-search-input {
        flex: 1;
        width: 100%;
        height: px2rem(32);
        font-size: px2rem(14);
        background: transparent;
        border: none;
        & .focus {
          outline: none;
        }
      }
      .slide-contents-search-cancel {
        flex: 0 0 px2rem(50);
        font-size: px2rem(14);
        @include center;
      }
    }
  }
}
</style>