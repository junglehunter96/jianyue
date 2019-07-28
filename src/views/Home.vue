<template>
  <div class="home">
    <div id="read">
    </div>
  </div>
</template> 

<script>
// @ is an alias to /src
import Epub from "epubjs";
import { mapGetters } from 'vuex';
export default {
  name: "home",
  computed: {
    ...mapGetters(['book'])
  },
  methods: {
    showEbook () {
    }
  },
  mounted () {
    this.showEbook();
    console.log(this.book)
  }
};
</script>
<style lang="scss" scoped>
</style>

