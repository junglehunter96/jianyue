<template>
  <div class="ebook-slide-contents">
    <div class="slide-contents-search-wrapper">
      <div class="slide-contents-search-icon">
        <span class="icon-search"></span>
      </div>
      <input class="slide-contents-input" type="text" :placeholder="$t('book.searchHint')">
      <div class="slide-contents-search-cancel">{{$t('book.cancel')}}</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>