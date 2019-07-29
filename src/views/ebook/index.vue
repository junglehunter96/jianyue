<template>
  <div>
    <ebook-title-bar></ebook-title-bar>
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
import EbookReader from "../../components/ebook/EbookReader"
import EbookTitleBar from "../../components/ebook/EbookTitleBar"
  export default {
    components: {
      EbookReader,EbookTitleBar
    }
  }
</script>

<style lang="scss" scoped>

</style>