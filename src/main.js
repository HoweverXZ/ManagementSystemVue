// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vueaxios from 'vue-axios';
import App from "./App";
import router from './router'
Vue.config.productionTip = false

Vue.use(ElementUI);


Vue . use ( Vueaxios , axios )
new Vue({
  router,
  axios,
  render :h=>h(App)
}).$mount('#app');
