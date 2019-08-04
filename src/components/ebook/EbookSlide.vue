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
            <div class="content-page"></div>
            <div class="content-page-tab"></div>
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
export default {
  mixins: [ebookMixins],
  methods: {
    quitMenu (e) {
      console.log(e)
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
  }
  .content-bg {
    flex: 0 0 15%;
    height: 100%;
  }
}
</style>