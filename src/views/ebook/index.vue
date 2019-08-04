<template>
  <div>
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
import EbookReader from "../../components/ebook/EbookReader"
import EbookTitle from "../../components/ebook/EbookTitle"
import EbookMenu from "../../components/ebook/EbookMenu"
import { setInterval, clearTimeout } from 'timers';
import { mapGetters } from "vuex";
export default {
  components: {
    EbookReader, EbookTitle, EbookMenu
  },
  computed: {
    ...mapGetters(["fileName"])
    },
  methods: {
    startLoopReadTime () {
      let readTime = this.$storage.getReadTime(this.fileName)
      if (!readTime) {
        readTime = 0
      }
      this.task = setInterval(() => {
        readTime++ 
        if (readTime%30 === 0) {
          this.$storage.saveReadTime(this.fileName, readTime)
        }
      }, 1000)
    }
  },
  mounted () {
    this.startLoopReadTime();
  },
  beforeDestroy () {
    if (this.task) {
      clearTimeout(this.task)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>