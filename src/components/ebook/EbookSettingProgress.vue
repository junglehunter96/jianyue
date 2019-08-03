<template>
  <transition name="slide-up">
    <div
      class="setting-wrapper"
      v-show="menuVisible && settingVisible === 2"
    >
      <div class="setting-progress">
        <div class="time-read-wrapper">
          <span class="read-time-text">222</span>
          <span class="icon-forward"></span>
        </div>
        <div class="progress-wrapper">
          <div class="progress-icon-wrapper">
            <span
              class="icon-back"
              @click="prevSection"
            ></span>
          </div>
          <input
            class="progress"
            type="range"
            max="100"
            min="0"
            step="1"
            @change="onProgressChange($event.target.value)"
            @input="onProgressInput($event.target.value)"
            :value="progress"
            :disabled="!bookAvailable"
            ref="progress"
          >
          <div class="progress-icon-wrapper">
            <span
              class="icon-forward"
              @click="nextSection"
            ></span>
          </div>
        </div>
        <div class="text-wrapper">
          <span>{{bookAvailable ? progress + '%' : '加载中...'}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixins } from '../../utils/mixins';
export default {
  mixins: [ebookMixins],
  methods: {
    displayProgress () {
      const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
      this.currentBook.rendition.display(cfi)
    },
    onProgressChange (progress) {
      this.setProgress(progress).then(() => {
        this.displayProgress()
        this.updateProgressBg()

      })
    },
    onProgressInput (progress) {
      this.setProgress(progress).then(() => {
        this.updateProgressBg()
      })
    },
    displaySection () {
      const sectioninfo = this.currentBook.section(this.section)
      if (sectioninfo && sectioninfo.href) {
        this.currentBook.rendition.display(sectioninfo.href).then(() => {
          this.refreshLocation()
        })
      }
    },
    refreshLocation () {
      const currentLocation = this.currentBook.rendition.currentLocation();
      if (currentLocation && currentLocation.start.cfi) {
        const progress = this.currentBook.locations.percentageFromCfi(currentLocation.start.cfi);
        this.setProgress(Math.floor(progress * 100))
      }
    },
    prevSection () {
      if (this.section > 0 && this.bookAvailable) {
        this.setSection(this.section - 1).then(() => {
          this.displaySection()
        })
      }

    },
    nextSection () {
      //spine 电子书进度
      if (this.section < this.currentBook.spine.length - 1 && this.bookAvailable) {
        this.setSection(this.section + 1).then(() => {
          this.displaySection()
        })
      }
    },
    updateProgressBg () {
      this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
    }

  },
  updated () {
    this.updateProgressBg();
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin.scss";

.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  z-index: 101;
  width: 100%;
  height: px2rem(90);
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  .setting-progress {
    position: relative;
    width: 100%;
    height: 100%;
    .time-read-wrapper {
      position: absolute;
      width: 100%;
      height: px2rem(40);
      top: 0;
      left: 0;
      @include center;
      font-size: px2rem(12);
    }
    .progress-wrapper {
      width: 100%;
      height: 100%;
      @include center;
      padding: 0 px2rem(15);
      box-sizing: border-box;
      .progress-icon-wrapper {
        @include center;
        .icon-back {
          font-size: px2rem(20);
        }
        .icon-forward {
          font-size: px2rem(20);
        }
      }
      .progress {
        width: 100%;
        margin: px2rem(10);
        -webkit-appearance: none;
        height: px2rem(2);
        background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
        &:focus {
          outline: none;
        }
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: px2rem(20);
          width: px2rem(20);
          border-radius: 50%;
          background: white;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
          border: px2rem(1) solid #ddd;
        }
      }
    }
    .text-wrapper {
      position: absolute;
      left: 0;
      bottom: px2rem(10);
      width: 100%;
      color: #333;
      font-size: px2rem(12);
      text-align: center;
    }
  }
}
</style>