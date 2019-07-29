// book_module

const book = {
  state: {
    fileName: "", //文件地址名
    menuVisible: false
  },
  mutations: {
    SET_FILE_NAME: (state, fileName) => {
      state.fileName = fileName;
    },
    SET_MENU_VISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible;
    },
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      return commit("SET_FILE_NAME", fileName);
    },
    setMenuVisible: ({ commit }, menuVisible) => {
      return commit("SET_MENU_VISIBLE", menuVisible);
    },

  }
};
export default book;
