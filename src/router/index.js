import Vue from 'vue'
import Router from 'vue-router'
import App from "../App";
import leftmenulist from "../components/leftmenulist";
import purchaserTable from "../components/purchaserTable";
import UpdateVue from "../components/UpdateVue";
import purchaseaddform from "../components/purchaseaddform";
Vue.use(Router)

export default new Router({
  name: 'router',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/menu',
      component: leftmenulist,
      children: [
        {
          path: 'purchaserTable',
          component: purchaserTable,
        },
        {
          path: 'update',
          component: UpdateVue
        }
      ]
    },
  ]
})
