<template>
  <div class="home">
    <div id="read">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Epub from "epubjs";
export default {
  name: "home",
  methods: {
    showEbook() {
      const DOWNLOAD_URL = '/2014_Book_Self-ReportedPopulationHealthA.epub';
      this.book = new Epub(DOWNLOAD_URL);
      this.book.renderTo('read',{
        width:Window.innerWidth,
        height:Window.innerHeight
      }).display()
    }
  },
  mounted() {
    this.showEbook()
  }
};
</script>
