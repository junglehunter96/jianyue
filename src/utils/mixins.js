import { mapGetters, mapActions } from "vuex";

const ebookMixins = {
  computed: {
    ...mapGetters(["fileName", "menuVisible"])
  },
  methods: {
    ...mapActions(["setFileName", "setMenuVisible"])
  }
};
export { ebookMixins }
