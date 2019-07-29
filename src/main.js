import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/styles/global.scss";
import "./assets/styles/icon.css";


Vue.prototype.$src = process.env.VUE_APP_SRC;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
