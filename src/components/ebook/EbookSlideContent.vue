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
          @click="showSearchPage"
          :placeholder="$t('book.searchHint')"
        >
        <div
          class="slide-contents-search-cancel"
          v-show="searchVisible"
          @click="hideSearchPage"
        >{{$t('book.cancel')}}</div>
      </div>
    </div>
    <div class="slide-contents-book-wrapper">
      <div class="slide-contents-book-img-wrapper">
        <img
          :src="cover"
          class="slide-contents-book-img"
        >
      </div>
      <div class="slide-contents-book-info-wrapper">
        <div
          class="slide-contents-book-title"
          v-if="metadata&&metadata.title"
        >
          <div class="slide-contents-book-title-text">{{metadata.title}}</div>
        </div>
        <div
          class="slide-contents-book-author"
          v-if="metadata&&metadata.creator"
        >
          <div class="slide-contents-book-author-text">{{metadata.creator}}</div>
        </div>
      </div>
      <div class="slide-contents-book-progress-wrapper">
        <div class="slide-contents-book-progress">
          <span class="progress">{{progress + '%'}}</span>
          <div class="progress-text">{{$t('book.haveRead2')}}</div>
        </div>
        <div class="slide-contents-book-time">{{getReadTimeText()}}</div>
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
    showSearchPage () {
      this.searchVisible = true
    },
    hideSearchPage () {
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
        &:focus {
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
  .slide-contents-book-wrapper {
    display: flex;
    width: 100%;
    height: px2rem(90);
    padding: px2rem(10) px2rem(15) px2rem(20) px2rem(15);
    box-sizing: border-box;
    .slide-contents-book-img-wrapper {
      flex: 0 0 px2rem(45);
      .slide-contents-book-img {
        width: px2rem(45);
        height: px2rem(60);
      }
    }
    .slide-contents-book-info-wrapper {
      flex: 1;
      padding: 0 px2rem(10);
      box-sizing: border-box;
      .slide-contents-book-title {
        // width: px2rem(153.75);
        font-size: px2rem(14);
        line-height: px2rem(16);
        @include left;
        .slide-contents-book-title-text {
          @include ellipsis2(3);
        }
      }
      .slide-contents-book-author {
        // width: px2rem(153.75);
        font-size: px2rem(12);
        line-height: px2rem(14);
        margin-top: px2rem(5);
        @include left;
        .slide-contents-book-author-text {
          @include ellipsis2(2);
        }
      }
    }
    .slide-contents-book-progress-wrapper {
      flex: 0 0 px2rem(70);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .slide-contents-book-progress {
        display: flex;
        .progress {
          font-size: px2rem(14);
        }
        .progress-text {
          font-size: px2rem(12);
        }
      }
      .slide-contents-book-time {
        font-size: px2rem(12);
        margin-top: px2rem(5);
      }
    }
  }
}
</style>