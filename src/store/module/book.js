const book = {
  state: {
    INDEX: 1
  },
  mutations: {
    "SET_INDEX": (state,newValue)=>{
      state.INDEX = newValue
    } 
  },
  actions: {
    "setIndex": ({commit,state}, newValue)=>{
      return commit('SET_INDEX',newValue)
    }
  }
};
export default book